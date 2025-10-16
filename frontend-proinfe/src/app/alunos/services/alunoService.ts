import Aluno from "@/common/interfaces/aluno";
import { AlunoSchema } from "@/common/validations/alunoSchema";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/aluno`;

export async function getAlunos(search: string) {
  const params = {
    nome: search,
  };
  const response = await axios.get(`${BASE_URL}`, { params });
  const data: Promise<Aluno[]> = await response.data;

  return data;
}

export async function getOneAluno(id: number) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  const data: Promise<Aluno> = await response.data;

  return data;
}

export async function postAluno(aluno: Aluno) {
  try {
    await AlunoSchema.validate(aluno, { abortEarly: false });
    axios
      .post(`${BASE_URL}`, aluno)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return "postAluno";
  } catch (error) {
    return "error";
  }
}

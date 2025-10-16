"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAlunos, getOneAluno } from "../services/alunoService";
import Aluno from "@/common/interfaces/aluno";

export default function ViewAluno() {
  const params = useParams();
  const [data, setData] = useState<Aluno>();

  useEffect(() => {
    const fetchEscolas = async () => {
      const data = await getOneAluno(+params.id!);
      setData(data);
    };
    fetchEscolas();
  }, []);

  return (
    <div className="flex-1 ml-64 mt-16">
      <div className="grid mb-6 md:grid-cols-3 rounded-lg bg-white h-30">
        <div className="p-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            CPF: {data?.cpf}
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-6">
            Nome: {data?.nome}
          </label>
        </div>
        <div className="p-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Data de Nascimento:{" "}
            {data?.dataNascimento
              ? new Date(data?.dataNascimento + "T00:00:00").toLocaleDateString(
                  "pt-BR"
                )
              : ""}
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-6">
            Nacionalidade: {data?.nacionalidade}
          </label>
        </div>
        <div className="p-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Sexo: {data?.sexo}
          </label>
        </div>
        <div></div>
      </div>
      <div className="grid mb-6 md:grid-cols-3">
        {data?.contato.map((data) => (
          <div className="rounded-lg bg-white h-30 p-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Telefone: {data.telefone}
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-6">
              Email: {data.email}
            </label>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Aluno from "@/common/interfaces/aluno";
import { postAluno } from "../services/alunoService";

export default function NewAluno() {
  const [form, setForm] = useState<Aluno>({
    id: 0,
    nome: "",
    dataNascimento: new Date(),
    cpf: "",
    nacionalidade: "",
    sexo: "",
    contato: [
      {
        id: 0,
        email: "",
        telefone: "",
      },
    ],
  });

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (valor) {
      const [ano, mes, dia] = valor.split("-").map(Number);
      setForm((prev) => ({
        ...prev,
        dataNascimento: new Date(ano, mes - 1, dia),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        dataNascimento: new Date(),
      }));
    }
  };

  const handleNew = () => {
    postAluno(form);
  };

  return (
    <div className="flex-1 ml-64 mt-16 ">
      <div className="grid md:grid-cols-3 gap-3">
        <input
          placeholder="Nome"
          type="text"
          value={form?.nome}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, nome: e.target.value }))
          }
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        ></input>

        <input
          placeholder="CPF"
          type="text"
          value={form?.cpf}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, cpf: e.target.value }))
          }
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        ></input>

        <input
          placeholder="Data de Nascimento"
          type="date"
          value={
            form?.dataNascimento
              ? form?.dataNascimento.toISOString().slice(0, 10)
              : ""
          }
          onChange={changeDate}
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        ></input>

        <input
          placeholder="Sexo: Masculino/Feminino"
          type="text"
          value={form?.sexo}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, sexo: e.target.value }))
          }
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        ></input>

        <input
          placeholder="Nacionalidade"
          type="text"
          value={form?.nacionalidade}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, nacionalidade: e.target.value }))
          }
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        ></input>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => handleNew}
      >
        Salvar
      </button>
    </div>
  );
}

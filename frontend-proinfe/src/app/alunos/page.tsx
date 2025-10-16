"use client";

import Aluno from "@/common/interfaces/aluno";
import Table from "@/components/table";
import { useEffect, useState } from "react";
import { getAlunos } from "./services/alunoService";
import { useRouter } from "next/navigation";

export default function ListAlunos() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Aluno[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEscolas = async () => {
      const data = await getAlunos(search);
      setData(data);
    };
    fetchEscolas();
  }, [search]);

  const handleEye = (id: number) => {
    router.push(`alunos/${id}`);
  };
  const handleNew = () => {
    router.push(`alunos/novo`);
  };
  const handleDelete = (id: number) => {};
  return (
    <div className="flex-1 ml-64 mt-16">
      <div className="flex justify-end mr-5 mb-3">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleNew}
        >
          Novo
        </button>
      </div>
      <input
        placeholder="Digite o nome do aluno para pesquisar"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
      ></input>

      <Table data={data} eye={handleEye} delete={handleDelete} />
    </div>
  );
}

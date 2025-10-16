import Aluno from "@/common/interfaces/aluno";
import { FaEye, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

interface Props {
  data: Aluno[];
  eye: (id: number) => void;
  delete: (id: number) => void;
}

export default function Table({
  data,
  eye: handleEye,
  delete: handleDelete,
}: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Nome</th>
            <th className="p-3">CPF</th>
            <th className="p-3">Telefone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id} className="border-b hover:bg-gray-50 h-15">
              <td>{data.nome}</td>
              <td>{data.cpf}</td>
              <td>{data.contato[0].telefone}</td>
              <td>{data.contato[0].email}</td>
              <td>
                <button
                  className="mr-5 text-gray-600 hover:text-[#007baf]"
                  onClick={() => handleEye(data.id)}
                >
                  <FaEye />
                </button>
                <button className="mr-5 text-gray-600 hover:text-green-600">
                  <FaPencilAlt />
                </button>
                <button
                  className="text-gray-600 hover:text-red-600"
                  onClick={() => handleDelete(data.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

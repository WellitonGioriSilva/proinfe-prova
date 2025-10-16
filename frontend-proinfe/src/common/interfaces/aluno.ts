import Contato from "./contato";

export default interface Aluno {
  id: number;
  nome: string;
  dataNascimento: Date;
  sexo: string;
  nacionalidade: string;
  cpf: string;
  contato: Contato[];
}

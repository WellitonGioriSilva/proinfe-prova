import * as Yup from "yup";

export const AlunoSchema = Yup.object().shape({
  nome: Yup.string()
    .required("O nome é obrigatório")
    .min(5, "O nome deve ter pelo menos 5 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),

  dataNascimento: Yup.string().required("Data obrigatória"),
  sexo: Yup.string().oneOf(["Masculino", "Feminino"]).required(),
  nacionalidade: Yup.string().oneOf([
    "Brasileira",
    "Brasileira-naturalizada",
    "Estrangeira",
  ]),
  cpf: Yup.string().required(),
  contato: Yup.array()
    .of(
      Yup.object({
        telefone: Yup.string().optional(),
        email: Yup.string().email("Email inválido").optional(),
      })
    )
    .min(1, "Ao menos um contato é obrigatório"),
});

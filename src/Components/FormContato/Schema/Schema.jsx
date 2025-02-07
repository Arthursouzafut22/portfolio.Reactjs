import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup
    .string()
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O nome deve conter apenas letras"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "E-mail inválido"
    )
    .required("O e-mail é obrigatório"),
  mensagem: yup.string().required(),
});

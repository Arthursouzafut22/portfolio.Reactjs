import { useState } from "react";

const emailValidate = {
  emaill: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  },
  number: {
    regex: /^(?!\d+$).+/,
  },
};

const UseForm = () => {
  const [error, setError] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validateForms = () => {
    setError(
      nome.length === 0 || email.length === 0 || mensagem.length === 0
        ? "Preencha o campo vazio!"
        : !emailValidate.emaill.regex.test(email)
        ? "Preencha um email válido!"
        : !emailValidate.number.regex.test(nome)
        ? "Nome não pode ser um número"
        : null
    );
  };

  return {
    validateForms,
    error,
    nome,
    email,
    mensagem,
    setNome,
    setEmail,
    setMensagem,
  };
};

export default UseForm;

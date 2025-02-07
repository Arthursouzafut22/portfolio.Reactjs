import styles from "../FormContato/FormContato.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";
import Spinner from "../Spinner/Spinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Schema/Schema";

const FormContato = () => {
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForms = async (data) => {
    const templeteParams = {
      from_name: data.nome,
      email: data.email,
      mensagem: data.mensagem,
    };
    setStatus(true);
    await emailjs.send(
      "service_f0c7pnf",
      "template_wv97qnh",
      templeteParams,
      "HmzCXjEDG2wKJAZMw"
    );
    setStatus(false);
    setValue("nome", "");
    setValue("email", "");
    setValue("mensagem", "");
    toast.success("Email enviado com sucesso!");
  };

  return (
    <>
      <section className={styles.section}>
        <span>../contato</span>
        <h1>
          Vamos trabalhar juntos?
          <br /> Entre em contato
        </h1>
        <form onSubmit={handleSubmit(submitForms)}>
          <Input
            type="text"
            {...register("nome", { required: true })}
            id="nome"
            placeholder="Nome"
          />
          <Input
            type="text"
            {...register("email", { required: true })}
            id="email"
            placeholder="E-mail"
          />
          <textarea
            {...register("mensagem", { required: true })}
            id="msg"
            placeholder="Mensagem"
            rows={5}
          ></textarea>

          <Button>{status ? <Spinner /> : "Enviar mensagem"}</Button>
        </form>
        <Toast />
      </section>
    </>
  );
};

export default FormContato;

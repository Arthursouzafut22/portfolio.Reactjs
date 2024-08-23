import styles from "../FormContato/FormContato.module.scss";
import Input from "./Input";
import Button from "../Button/Button";
import UseForm from "../../Hooks/UseForm";

const FormContato = () => {
  const {
    nome,
    email,
    mensagem,
    error,
    validateForms,
    setNome,
    setEmail,
    setMensagem,
  } = UseForm();

  const submitForms = (e) => {
    e.preventDefault();
    validateForms();
  };

  return (
    <>
      <section className={styles.section}>
        <span>../contato</span>
        <h1>
          Vamos trabalhar juntos?
          <br /> Entre em contato
        </h1>
        <form onSubmit={submitForms}>
          <Input
            type="text"
            name="nome"
            value={nome}
            id="nome"
            placeholder="Nome"
            onChange={({ target }) => setNome(target.value)}
            error={error}
          />
          <Input
            type="text"
            name="email"
            value={email}
            id="email"
            placeholder="E-mail"
            onChange={({ target }) => setEmail(target.value)}
          />
          <textarea
            name="mensagem"
            value={mensagem}
            id="msg"
            placeholder="Mensagem"
            rows={5}
            onChange={({ target }) => setMensagem(target.value)}
          ></textarea>
          {error && (
            <p style={{ color: "red", margin: "0px", fontSize: "15px" }}>
              {error}
            </p>
          )}
          <Button>Enviar mensagem</Button>
        </form>
      </section>
    </>
  );
};

export default FormContato;

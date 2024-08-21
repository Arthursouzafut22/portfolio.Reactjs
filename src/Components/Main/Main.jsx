import styles from "../Main/Main.module.scss";
import Redes from "../Redes/Redes";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          <span>ola!</span> Sou Arthur Souza <span>Desenvolvedor Frontend</span>{" "}
          baseado em desafios!
        </h1>
        <Redes />
        <p>
          Entre em contato comigo estou disponível para novos trabalhos e
          projetos que impulsionem a inovação e a eficiência.
        </p>

        <ButtonAnimation />
      </main>
    </>
  );
};

export default Main;

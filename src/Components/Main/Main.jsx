import styles from "../Main/Main.module.scss";
import Redes from "../Redes/Redes";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          <span>ola!</span> Sou Arthur Souza <span>Desenvolvedor Frontend</span>{" "}
          movido por desafios!
        </h1>
        <Redes />
        <p>
          Entre em contato comigo, estou disponível para novas oportunidades que
          impulsionem a inovação e eficiência
        </p>
        <ButtonAnimation />
      </main>
    </>
  );
};

export default Main;

import styles from "../ButtonAnimation/ButtonAnimation.module.scss";

const ButtonAnimation = () => {
  const scrollEmail = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 1000,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <a href="/" className={styles.codepenbutton} onClick={scrollEmail}>
      <span>Contato</span>
    </a>
  );
};

export default ButtonAnimation;

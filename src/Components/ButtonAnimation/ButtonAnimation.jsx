import styles from "../ButtonAnimation/ButtonAnimation.module.scss";

const ButtonAnimation = () => {
  const scrollEmail = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
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

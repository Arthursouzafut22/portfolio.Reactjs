import styles from "../Footer/Footer.module.scss";
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Made withby <IoMdHeart style={{ color: "#804edd" }} /> Arthur Souza
        </p>
      </footer>
    </>
  );
};

export default Footer;

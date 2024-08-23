import { Link } from "react-router-dom";
import styles from "../Header/Header.module.scss";
import Button from "../Button/Button";
import { FaHashtag } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={styles.wrapperLogo}>
            <MdOutlineArrowBackIos
              style={{ color: "#804EDD", fontSize: "1.5625rem" }}
            />
            <Link to="/">Arthur</Link>
            <MdOutlineArrowForwardIos
              style={{ color: "#804EDD", fontSize: "1.5625rem" }}
            />
          </div>
          <div className={styles.wrapper2}>
            <span>
              <FaHashtag style={{ color: "#804EDD" }} />
              <Link to="/projetos">Projetos</Link>
            </span>
            <Button>Baixar CV</Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

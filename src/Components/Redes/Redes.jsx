import styles from "../Redes/Redes.module.scss";
import { iconsItem } from "./RedesIcon";

const Redes = () => {
  return (
    <>
      <div className={styles.wrapperRedes}>
        {iconsItem &&
          iconsItem.map(({ href, id, icon }) => (
            <a
              href={href}
              key={id}
              style={{ color: "#804EDD", fontSize: "55px" }}
            >
              {icon}
            </a>
          ))}
      </div>
    </>
  );
};

export default Redes;

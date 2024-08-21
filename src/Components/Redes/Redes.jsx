import styles from "../Redes/Redes.module.scss";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconsItem = [
  {
    id: 1,
    icon: <FaGithubSquare />,
    href: "https://github.com/Arthursouzafut22",
  },
  {
    id: 2,
    icon: <FaWhatsappSquare />,
    href: "https://api.whatsapp.com/send/?phone=5531983262026&text&type=phone_number&app_absent=0",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/arthur-souza-588168256/",
  },
  { id: 4, icon: <MdEmail />, href: "arthursouzafut@gmail.com" },
];

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

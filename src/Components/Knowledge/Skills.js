import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";

const styless = {
  fontSize: "clamp(3.125rem,4vw, 3.75rem)",
  color: "#181028",
};

export const skills = [
  {
    skill: <IoLogoHtml5 style={styless} />,
    name: "HTML",
  },
  {
    skill: <SiCss3 style={styless} />,
    name: "CSS3",
  },
  {
    skill: <FaSass style={styless} />,
    name: "SASS",
  },
  {
    skill: <RiJavascriptFill style={styless} />,
    name: "Javascript",
  },
  {
    skill: <BiLogoTypescript style={styless} />,
    name: "Typescript",
  },
  {
    skill: <FaReact style={styless} />,
    name: "React",
  },
  {
    skill: <FaGithubSquare style={styless} />,
    name: "GitHub",
  },
  {
    skill: <FaNpm style={styless} />,
    name: "NPM",
  },
];

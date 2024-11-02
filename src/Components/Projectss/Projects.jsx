import styles from "../Projectss/Projects.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import OptimizeImage from "../OptimizeImage/OptimizeImage";
import { cardsInfo } from "./Myprojects";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const Projects = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <p>../trabalhos</p>
          <div className={styles.contlink}>
            <h1>Projetos</h1>
            <Link to="/">
              <FaArrowLeft style={{ color: " #2c2446" }} />
              Voltar
            </Link>
          </div>

          <div className={styles.wrapper}>
            {cardsInfo.length > 0 &&
              cardsInfo.map(({ id, img, title, description, url }) => (
                <div key={id} className={styles.card}>
                  <Suspense fallback={<Loader />}>
                    <OptimizeImage
                      src={img}
                      alt={title}
                      fallback={<Loader />}
                    />
                  </Suspense>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Ver projeto
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

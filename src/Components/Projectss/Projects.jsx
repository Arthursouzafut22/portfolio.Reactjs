import styles from "../Projectss/Projects.module.scss";
import { cardsInfo } from "./Myprojects";

const Projects = () => {
  return (
    <>
      <section className={styles.section}>
        <p>../trabalhos</p>
        <h1>Projetos</h1>

        <div className={styles.wrapper}>
          {cardsInfo.length > 0 &&
            cardsInfo.map(({ id, img, title, description, url }) => (
              <div key={id} className={styles.card}>
                <img src={img} alt={title} loading="lazy" />
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Ver projeto
                </a>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

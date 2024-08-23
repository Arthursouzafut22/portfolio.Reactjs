import styles from "../Knowledge/Knowledge.module.scss";
import { skills } from "./Skills";

const Knowledge = () => {
  return (
    <>
      <section className={styles.section}>
        <p>../competências</p>
        <h1>Conhecimentos</h1>
        <div className={styles.wrapper}>
          {skills.length > 0 &&
            skills.map((skil, index) => (
              <div key={index}>
                {skil.skill}
                {skil.name}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Knowledge;

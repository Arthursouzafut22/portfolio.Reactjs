import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <li className={styles.ball}></li>
      <li className={styles.ball}></li>
      <li className={styles.ball}></li>
    </div>
  );
};

export default Spinner;

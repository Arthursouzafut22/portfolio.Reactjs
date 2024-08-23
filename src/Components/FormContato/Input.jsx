import styles from "../FormContato/Input.module.scss";

const Input = ({ type, id, name, value, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
    </>
  );
};

export default Input;

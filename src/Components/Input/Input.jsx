import styles from "./Input.module.scss";
import { forwardRef } from "react";

const Input = forwardRef(({ type, id, name, placeholder, ...rest }, ref) => {
  return (
    <>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...rest}
      />
    </>
  );
});

export default Input;

Input.displayName = "Input";

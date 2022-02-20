import React from "react";

//styles
import styles from "./button.module.scss";

const Button = ({ text = "Click me", large = false, type = "button" }) => {
  return (
    <button
      name={type}
      type={type}
      className={`${styles["button"]}  ${styles["button--primary"]}`}
    >
      <span>{text} </span>
    </button>
  );
};

export default Button;

import React from "react";

//styles
import styles from "./button.module.scss";

const Button = ({ text = "Click me", type = "button", className }) => {
  return (
    <button
      name={type}
      type={type}
      className={`${styles["button"]}  ${styles["button--primary"]} ${styles[className]}`}
    >
      <span>{text} </span>
    </button>
  );
};

export default Button;

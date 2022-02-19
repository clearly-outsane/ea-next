import React from "react";

//styles
import styles from "../../styles/button.module.scss";

const Button = ({ text = "Click me" }) => {
  return (
    <button className={`${styles["button"]}  ${styles["button--primary"]}`}>
      <span>{text} </span>
    </button>
  );
};

export default Button;

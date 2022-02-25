import React from "react";

//styles
import styles from "./button.module.scss";

const Button = ({
  text = "Click me",
  type = "button",
  variant,
  className,
  href = null,
}) => {
  return href ? (
    <a href={href}>
      <button
        name={type}
        type={type}
        className={`${styles["button"]}  ${styles["button--primary"]} ${styles[variant]} ${className}`}
      >
        <span>{text} </span>
      </button>
    </a>
  ) : (
    <button
      name={type}
      type={type}
      className={`${styles["button"]}  ${styles["button--primary"]} ${styles[variant]} ${className}`}
    >
      <span>{text} </span>
    </button>
  );
};

export default Button;

import React from "react";
import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles["button-component"]}>{props.children}</button>
  );
};

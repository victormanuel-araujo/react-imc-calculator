import React from "react";
import { FeedbackBoxProps } from "./feedback-box.types";
import styles from "./feedback-box.module.css";

export const FeedbackBox = (props: FeedbackBoxProps) => {
  return (
    <div
      onClick={props.clear}
      className={`${styles["feedback-box-wrapper"]} ${
        props.type === "success" ? styles["success"] : styles["error"]
      }`}
    >
      <span>{props.message}</span>
      <span>x</span>
    </div>
  );
};

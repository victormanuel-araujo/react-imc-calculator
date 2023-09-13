import React from "react";
import { TextInputProps } from "./text-input.types";
import styles from "./text-input.module.css";

export const TextInput = ({
  label,
  onChangeText,
  value,
  placeholder,
  maxLength,
}: TextInputProps) => {
  return (
    <label className={styles["text-input-label-wrapper"]}>
      <span>{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChangeText(target.value)}
        maxLength={maxLength}
      />
    </label>
  );
};

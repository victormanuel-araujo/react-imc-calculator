import React from "react";
import { MaskInputProps } from "./mask-input.types";
import { maskValue } from "./mask-input.utils";
import { TextInput } from "../text-input";

export const MaskInput = ({
  label,
  mask,
  placeholder,
  onChangeText,
  applyMask,
  value,
}: MaskInputProps) => {
  const onChangeInnerText = (newValue: string) => {
    const _mask = (!!applyMask ? applyMask(newValue) : mask) as string;
    const maskedValue = maskValue(
      newValue.trim(),
      _mask,
      newValue?.length < value?.length || false
    );
    onChangeText(maskedValue);
  };

  return (
    <TextInput
      value={value}
      onChangeText={onChangeInnerText}
      label={label}
      placeholder={placeholder}
    />
  );
};

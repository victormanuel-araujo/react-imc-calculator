import { TextInputProps } from "../text-input/text-input.types";

export interface MaskInputProps extends TextInputProps {
  mask?: string;
  applyMask?(value: string): string;
}

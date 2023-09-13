export interface TextInputProps {
  label: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChangeText(value: string): void;
}

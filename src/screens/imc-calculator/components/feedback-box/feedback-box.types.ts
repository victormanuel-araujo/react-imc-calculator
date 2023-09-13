export interface FeedbackBoxProps {
  type: "success" | "error";
  message: string;
  clear(): void;
}

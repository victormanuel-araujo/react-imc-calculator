import React, { SyntheticEvent, useState } from "react";
import styles from "./imc-calculator.module.css";
import { TextInput } from "src/components/text-input";
import { MaskInput } from "src/components/mask-input";
import { Button } from "src/components/button";
import { IMCCalculatorFeedback } from "./imc-calculator.types";
import { FeedbackBox } from "./components/feedback-box";

export const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [feedback, setFeedback] = useState<IMCCalculatorFeedback>();

  const calculateIMC = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const _height = Number(height);
    const _weight = Number(weight);
    if (isNaN(_weight) || _weight === 0)
      return setFeedback({ success: false, message: "Peso inválido!" });
    if (isNaN(_height) || _height === 0)
      return setFeedback({ success: false, message: "Altura inválida!" });

    const imc = Number(_weight) / Number(_height) ** 2;
    if (imc < 18.5) return setFeedback({ success: true, message: "Magreza" });
    if (imc < 24.9) return setFeedback({ success: true, message: "Normal" });
    if (imc < 30) return setFeedback({ success: true, message: "Sobrepeso" });
    return setFeedback({ success: true, message: "Obesidade" });
  };

  const clearFeedback = () => {
    setFeedback(undefined);
  };

  return (
    <main className={styles["imc-calculator-main-wrapper"]}>
      <div className={styles["imc-calculator-content-wrapper"]}>
        <h1>Calculadora de IMC</h1>

        {!!feedback && (
          <FeedbackBox
            clear={clearFeedback}
            message={feedback?.message}
            type={feedback.success ? "success" : "error"}
          />
        )}

        <form onSubmit={calculateIMC}>
          <MaskInput
            label={
              "Altura " + (height.length <= 2 ? "(centímetros)" : "(metros)")
            }
            value={height}
            onChangeText={setHeight}
            applyMask={(value) =>
              value.replace(".", "").length > 2 ? "#.##" : "###"
            }
          />
          <TextInput
            label="Peso (kg)"
            value={weight}
            onChangeText={setWeight}
            maxLength={3}
          />
          <Button>Calcular</Button>
        </form>
      </div>
    </main>
  );
};

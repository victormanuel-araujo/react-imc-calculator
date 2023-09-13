import React from "react";
import ReactDOM from "react-dom/client";
import { IMCCalculator } from "./screens/imc-calculator";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IMCCalculator />
  </React.StrictMode>
);

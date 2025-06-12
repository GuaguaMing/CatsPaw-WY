import React from "react";
import "./SquareLiquidButton.css";

function SquareLiquidButton({ children }) {
  return (
    <div className="square-liquid-button overflow-hidden">
      <div className="liquid-effect" />
      <div className="button-content">{children}</div>
    </div>
  );
}

export default SquareLiquidButton; 
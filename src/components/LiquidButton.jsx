import React from "react";
import "./LiquidButton.css";

function LiquidButton({ label }) {
  return (
    <div className="liquid-button overflow-hidden">
      <div className="liquid-effect" />
      <div className="button-label">{label}</div>
    </div>
  );
}

export default LiquidButton;

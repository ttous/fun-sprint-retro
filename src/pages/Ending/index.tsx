import React from "react";
import "./index.css";
import ending from "../../images/ending.png";

export default function Ending() {
  return (
    <div id="ending-page">
      <img
        alt="ending"
        id="ending-image"
        src={ending}
        width={800}
      />
    </div>
  );
}

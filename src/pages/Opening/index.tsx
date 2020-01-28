import React from "react";
import "./index.css";
import logoGif from "../../images/logo.gif";

export default function Opening() {
  return (
    <div id="opening-page">
      <img
        alt="logo GIF"
        className="logo-gif"
        src={logoGif}
        width={700}
      />
    </div>
  );
}

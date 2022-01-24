import React from "react";
import "./index.css";

export default function Actions() {
  return (
    <div id="actions-page">
      <a
        href="www.google.com" // Should point to your team's notes tool
        rel="noopener noreferrer"
        target="_blank"
      >
        <button id="confluence-button">{"Confluence"}</button>
      </a>
    </div>
  );
}

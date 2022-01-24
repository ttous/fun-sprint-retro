import React from "react";
import "./index.css";
import { Page } from "../../types";

interface IFooterProps {
  currPage: Page;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Footer({ currPage, onPrev, onNext }: IFooterProps) {
  // Navigation throw keyboard arrows
  React.useEffect(() => {
    const keydownHandler = (event: KeyboardEvent): void => {
      // Left arrow
      if (event.keyCode === 37 && onPrev) onPrev();
      // Right arrow
      else if (event.keyCode === 39 && onNext) onNext();
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onPrev, onNext]);

  return (
    <footer>
      <div id="button-prev-container">
        {onPrev !== undefined && (
          <button id="button-prev" onClick={onPrev}>
            {"<"}
          </button>
        )}
      </div>

      <div id="footer-info">{currPage.toUpperCase()}</div>

      <div id="button-next-container">
        {onNext !== undefined && (
          <button id="button-next" onClick={onNext}>
            {">"}
          </button>
        )}
      </div>
    </footer>
  );
}

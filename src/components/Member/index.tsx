import React from "react";
import "./index.css";
import { IMember } from "../../types";

interface IMemberProps {
  member: IMember;
  big?: boolean;
}

export default function Member({
  member: {
    color,
    name,
    picture,
  },
  big,
}: IMemberProps) {
  return (
    <div
      className={`member-wrapper${big ? " big" : ""}`}
      style={{ backgroundColor: color }}
    >
      <div className="member">
        <img
          alt={name}
          className="member-picture"
          src={picture}
        />
        <div className="member-name">
          {name}
        </div>
      </div>
    </div>
  );
}

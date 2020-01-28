import React from "react";
import "./index.css";
import { IMember, MemberColor } from "../../types";

const DEFAULT_VALUE: string = "DEFAULT";

interface IMemberFormProps {
  availableMembers: Omit<IMember, "color">[];
  color: MemberColor;
  initialValue?: string;
  onChange: (member: IMember) => void;
  onDelete: () => void;
}

export default function MemberForm({
  availableMembers,
  color,
  initialValue,
  onChange,
  onDelete,
}: IMemberFormProps) {

  return (
    <select
      className="member-form"
      value={initialValue || DEFAULT_VALUE}
      name="name"
      onChange={({ target: { value } }) => {
        const selectedMember = availableMembers.find(({ name }) => name === value);

        if (!selectedMember) onDelete();
        else {
          onChange({
            cohesion: [],
            color,
            name: selectedMember.name,
            picture: selectedMember.picture,
          });
        }
      }}
      style={{ borderColor: color }}
    >
      <option value={DEFAULT_VALUE}></option>
      {initialValue &&
        <option value={initialValue}>
          {initialValue}
        </option>
      }
      {availableMembers.map(({ name }, memberIndex) => (
        <option
          key={`member-${memberIndex}`}
          value={name}
        >
          {name}
        </option>
      ))}
    </select>
  );
}

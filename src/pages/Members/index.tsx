import React from "react";
import { MembersContext } from "../../components/App";
import MemberForm from "../../components/MemberForm";
import { MEMBERS } from "../../env";
import logo from "../../images/logo.png";
import { IMember, MEMBERS_COLORS } from "../../types";
import "./index.css";

// Should be 15 max
const MAX_MEMBER_COUNT: number = 10;

interface IMembersProps {
  onSetMembers: (members: IMember[]) => void;
}

export default function Members({ onSetMembers }: IMembersProps) {
  const members: IMember[] = React.useContext(MembersContext);

  // Reset on "escape"
  React.useEffect(() => {
    const keydownHandler = (event: KeyboardEvent): void => {
      // Escape
      if (event.keyCode === 27) onSetMembers([]);
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onSetMembers]);

  const availableMembers: Omit<IMember, "color">[] = MEMBERS.map((member) => ({
    ...member,
    cohesion: [],
  })).filter(({ name }) => {
    const takenNames: string[] = members.map(
      ({ name: takenName }) => takenName
    );
    return !takenNames.includes(name);
  });

  const filledMemberForms: JSX.Element[] = [];
  for (let i: number = 0; i < members.length; i++) {
    filledMemberForms.push(
      <MemberForm
        availableMembers={availableMembers}
        color={MEMBERS_COLORS[i % MEMBERS_COLORS.length]}
        initialValue={members[i].name}
        key={`member-form-${i}`}
        onChange={(newMember) => {
          const newMembers: IMember[] = [...members];
          newMembers[i] = newMember;
          onSetMembers(newMembers);
        }}
        onDelete={() => {
          const newMembers: IMember[] = [...members];
          newMembers.splice(i, 1);
          for (let j: number = i; j < newMembers.length; j++) {
            newMembers[j].color = MEMBERS_COLORS[j % MEMBERS_COLORS.length];
          }
          onSetMembers(newMembers);
        }}
      />
    );
  }

  return (
    <div id="members-page">
      <img alt="logo" className="logo" src={logo} width={100} />

      <div className="members-forms">
        <p>{"Crew members : "}</p>

        {filledMemberForms}

        {members.length < MAX_MEMBER_COUNT && (
          <MemberForm
            availableMembers={availableMembers}
            color={MEMBERS_COLORS[members.length % MEMBERS_COLORS.length]}
            onChange={(newMember) => {
              const newMembers: IMember[] = members.concat(newMember);
              onSetMembers(newMembers);
            }}
            onDelete={() => {}}
          />
        )}
      </div>
    </div>
  );
}

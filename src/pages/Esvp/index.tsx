import React from "react";
import "./index.css";
import { IMember, ESVP_ORDER } from "../../types";
import { MembersContext } from "../../components/App";
import Member from "../../components/Member";

interface IEsvpProps {
  onSetMembers: (members: IMember[]) => void;
}

export default function Esvp({ onSetMembers }: IEsvpProps) {
  const members: IMember[] = React.useContext<IMember[]>(MembersContext);
  const [memberIndex, setMemberIndex] = React.useState<number>(0);

  const autoSetMemberIndex = React.useCallback(() => {
    for (let i: number = 0; i < members.length; i++) {
      if (members[i].esvp === undefined) {
        setMemberIndex(i);
        return;
      }
    }

    setMemberIndex(-1);
  }, [members]);

  // Reset on "escape"
  React.useEffect(() => {
    const keydownHandler = (event: KeyboardEvent): void => {
      // Escape
      if (event.keyCode === 27) {
        const newMembers = members.map((member) => {
          member.esvp = undefined;
          return member;
        });
        onSetMembers(newMembers);
        autoSetMemberIndex();
      }
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onSetMembers, members, autoSetMemberIndex]);

  React.useEffect(autoSetMemberIndex);

  const esvpButtons: JSX.Element[] = [];
  for (let i: number = 0; i < ESVP_ORDER.length; i++) {
    esvpButtons.push(
      <button
        key={`esvp-button-${i}`}
        onClick={() => {
          const newMembers = [...members];
          newMembers[memberIndex].esvp = ESVP_ORDER[i];
          onSetMembers(newMembers);
          autoSetMemberIndex();
        }}
      >
        {ESVP_ORDER[i]}
      </button>
    );
  }

  const esvpHeads: JSX.Element[] = [];
  for (let i: number = 0; i < ESVP_ORDER.length; i++) {
    esvpHeads.push(
      <th
        key={`esvp-head-${i}`}
        style={{ width: `${100 / ESVP_ORDER.length}%` }}
      >
        {ESVP_ORDER[i]}
      </th>
    );
  }

  const esvpCells: JSX.Element[] = [];
  for (let i: number = 0; i < ESVP_ORDER.length; i++) {
    const esvpCellMembers: JSX.Element[] = [];
    for (let j: number = 0; j < members.length; j++) {
      if (members[j].esvp === ESVP_ORDER[i]) {
        esvpCellMembers.push(
          <Member key={`esvp-member-${j}`} member={members[j]} />
        );
      }
    }

    esvpCells.push(<td key={`esvp-${i}`}>{esvpCellMembers}</td>);
  }

  return (
    <div id="esvp-page">
      <div id="esvp-member">
        {members[memberIndex] && <Member big member={members[memberIndex]} />}
      </div>

      <div id="esvp-table">
        <table>
          <thead>
            <tr>{esvpHeads}</tr>
          </thead>
          <tbody>
            <tr>{esvpCells}</tr>
          </tbody>
        </table>
      </div>

      <div id="esvp-votes">{members[memberIndex] && <>{esvpButtons}</>}</div>
    </div>
  );
}

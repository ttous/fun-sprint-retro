import React from "react";
import "./index.css";
import Member from "../Member";
import LifePoints from "../LifePoints";
import { MembersContext } from "../App";

interface IHeaderProps {
  hideMembers?: boolean;
}

export default function Header({
  hideMembers,
}: IHeaderProps) {
  const members = React.useContext(MembersContext);

  const [hour, setHour] = React.useState<string>(new Date().toLocaleTimeString("fr"));

  const membersIcons: JSX.Element[] = [];
  for (let i: number = 0; i < members.length; i++) {
    membersIcons.push(
      <Member
        key={`member-${i}`}
        member={members[i]}
      />
    );
  }

  const hourInterval = window.setInterval(
    () => setHour(new Date().toLocaleTimeString("fr")),
    1000
  );

  React.useEffect(() => {
    return () => window.clearInterval(hourInterval);
  })

  return (
    <header>
      <div id="header-info">
        <div id="header-title">
          {"Retrospective"}
        </div>
        <div id="header-life-points">
          <LifePoints />
        </div>
        <div id="header-hour">
          {hour}
        </div>
      </div>

      {!hideMembers &&
        <>
          {membersIcons}
        </>
      }
    </header>
  );
}
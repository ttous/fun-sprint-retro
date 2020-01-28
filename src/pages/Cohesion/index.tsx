import React from "react";
import "./index.css";
import RadarChart from "../../components/RadarChart";
import { IMember, COHESION_AXES, BasicColor } from "../../types";
import Member from "../../components/Member";
import { MembersContext } from "../../components/App";

const MAX_AXIS_VALUE: number = 4;

interface ICohesionProps {
  onSetMembers: (members: IMember[]) => void;
}

export default function Cohesion({
  onSetMembers,
}: ICohesionProps) {
  const members: IMember[] = React.useContext<IMember[]>(MembersContext);
  const [memberIndex, setMemberIndex] = React.useState<number>(0);
  const [axisIndex, setAxisIndex] = React.useState<number>(0);

  const autoSetMemberAndAxeIndices = React.useCallback(() => {
    for (let i: number = 0; i < members.length; i++) {
      for (let j: number = 0; j < COHESION_AXES.length; j++) {
        if (members[i].cohesion[j] === undefined) {
          setMemberIndex(i);
          setAxisIndex(j);
          return;
        }
      }
    }

    setMemberIndex(-1);
    setAxisIndex(-1);
  }, [members]);

  // Reset on "escape"
  React.useEffect(() => {
    const keydownHandler = (event: KeyboardEvent): void => {
      // Escape
      if (event.keyCode === 27) {
        const newMembers = members.map((member) => {
          member.cohesion = [];
          return member;
        });
        onSetMembers(newMembers);
        autoSetMemberAndAxeIndices();
      };
    };

    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onSetMembers, members, autoSetMemberAndAxeIndices]);

  React.useEffect(autoSetMemberAndAxeIndices);

  const voteButtons: JSX.Element[] = [];
  for (let i: number = 0; i <= MAX_AXIS_VALUE; i++) {
    voteButtons.push(
      <button
        key={`vote-button-${i}`}
        onClick={() => {
          const newMembers = [...members];
          newMembers[memberIndex].cohesion[axisIndex] = i;
          onSetMembers(newMembers);
          autoSetMemberAndAxeIndices();
        }}
      >
        {i * 100 / MAX_AXIS_VALUE}
      </button>
    );
  }

  const meanValues: number[] = [];
  if (memberIndex === -1) {
    // Everyone voted
    for (let axisI: number = 0; axisI < COHESION_AXES.length; axisI++) {
      let sum: number = 0;
      for (let memberI: number = 0; memberI < members.length; memberI++) {
        sum += members[memberI].cohesion[axisI];
      }
      const mean: number = sum / members.length;
      meanValues.push(mean);
    }
  }

  return (
    <div id="cohesion-page">
      <div id="cohesion-member">
        {members[memberIndex] &&
          <Member big member={members[memberIndex]} />
        }
      </div>

      <div id="cohesion-chart">
        <RadarChart<typeof COHESION_AXES.length>
          axes={COHESION_AXES}
          colors={[...members.map(({ color }) => color), BasicColor.BLACK]}
          mainColor={BasicColor.BLACK}
          maxAxisValue={MAX_AXIS_VALUE}
          values={[...members.map(({ cohesion }) => cohesion), meanValues]}
          width={500}
        />
      </div>

      <div id="cohesion-votes">
        {COHESION_AXES[axisIndex] &&
          <>
            <div id="cohesion-axis">
              {COHESION_AXES[axisIndex]}
            </div>
            <div>
              {voteButtons}
            </div>
          </>
        }
      </div>
    </div>
  );
}

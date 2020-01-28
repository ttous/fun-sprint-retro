import React from "react";
import "./index.css";
import Heart from "../Heart";

export const DEFAULT_LIFE_POINT_COUNT: number = 5;

export default function LifePoints() {
  const [lifePoints, setLifePoints] = React.useState<number>(DEFAULT_LIFE_POINT_COUNT);

  const lifePointHearts: JSX.Element[] = [];
  for (let i: number = 0; i < DEFAULT_LIFE_POINT_COUNT; i++) {
    lifePointHearts.push(
      <Heart
        key={`heart-${i}`}
        filled={i < lifePoints}
      />
    );
  }

  return (
    <div
      className="life-points"
      onClick={lifePoints > 0
        ? () => setLifePoints(lifePoints - 1)
        : undefined}
    >
      {lifePointHearts}
    </div>
  )
}

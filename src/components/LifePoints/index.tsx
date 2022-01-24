import React, { useCallback } from "react";
import "./index.css";
import Heart from "../Heart";

export const HEART_COUNT: number = 5;

export default function LifePoints() {
  const [lifePoints, setLifePoints] = React.useState<number>(HEART_COUNT);

  const handleClick = useCallback(() => setLifePoints((prevLifePoints) => prevLifePoints > 0
    ? prevLifePoints - 1
    : 0), []);
  const handleDoubleClick = useCallback(() => setLifePoints(HEART_COUNT), []);

  const lifePointHearts: React.ReactNode[] = Array.from(Array(HEART_COUNT)).map((_, index) => (
    <Heart key={index} filled={index < lifePoints} />
    ))

  return (
    <div
      className="life-points"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {lifePointHearts}
    </div>
  )
}

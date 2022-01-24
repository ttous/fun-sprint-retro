import React from "react";
import { Color } from "../../types";

interface ISquareProps {
  x: number;
  y: number;
  size: number;
  color: Color;
}

export default function Square({ x, y, size, color }: ISquareProps) {
  return <rect x={x} y={y} width={size} height={size} fill={color} />;
}

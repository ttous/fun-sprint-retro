import React from "react";
import { BasicColor, Color } from "../../types";

interface ILineProps {
  stroke?: Color;
  strokeWidth?: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const DEFAULT_PROPS = {
  stroke: BasicColor.BLACK,
};

export default function Line(props: ILineProps) {
  const {
    stroke,
    strokeWidth,
    x1,
    y1,
    x2,
    y2,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <line
      {...{
        stroke,
        strokeWidth,
        x1,
        y1,
        x2,
        y2,
      }}
    />
  );
}

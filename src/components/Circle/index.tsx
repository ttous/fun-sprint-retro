import React from "react";
import { BasicColor, Color } from "../../types";

interface ICircleProps {
  fill?: Color;
  height?: number;
  stroke?: Color;
  strokeWidth?: number;
  radius: number;
  width?: number;
  x?: number;
  y?: number;
}

const DEFAULT_PROPS = {
  fill: BasicColor.NONE,
  stroke: BasicColor.BLACK,
};

export default function Circle(props: ICircleProps) {
  let { fill, stroke, strokeWidth, radius, width, x, y } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  if (!width) width = 2 * radius;

  return (
    <circle
      {...{
        stroke,
        strokeWidth,
        fill,
      }}
      cx={x !== undefined ? x : width / 2}
      cy={y !== undefined ? y : width / 2}
      r={radius}
    />
  );
}

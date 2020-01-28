import React from "react";

interface ITextProps {
  children: React.ReactNode;
  transform?: string;
  x: number;
  y: number;
}

const DEFAULT_PROPS = {};

export default function Text(props: ITextProps) {
  const {
    children,
    transform,
    x,
    y,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <text
      {...{
        transform,
        x,
        y,
      }}
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {children}
    </text>
  );
}

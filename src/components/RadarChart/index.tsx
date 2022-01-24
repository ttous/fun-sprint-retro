import React from "react";
import { BasicColor, Color, Tuple, IPoint } from "../../types";
import Circle from "../Circle";
import Line from "../Line";
import Text from "../Text";

interface IRadarChartProps<C extends number> {
  axes: Tuple<string, C>;
  colors: Color[];
  fill?: Color;
  height?: number;
  mainColor?: Color;
  maxAxisValue: number;
  stroke?: Color;
  strokeWidth?: number;
  values?: Array<Array<number>>;
  width?: number;
}

const DEFAULT_PROPS = {
  fill: BasicColor.NONE,
  stroke: BasicColor.BLACK,
  values: [],
  width: 500,
};

export default function RadarChart<C extends number>(
  props: IRadarChartProps<C>
) {
  const { axes, colors, mainColor, maxAxisValue, values, width } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const center: IPoint = {
    x: width / 2,
    y: width / 2,
  };
  const axesPoints: IPoint[] = [];

  const valueLength: number = width / 2 / maxAxisValue;
  const interAxisAngle: number = (2 * Math.PI) / axes.length; // in radians

  const valueCircles: JSX.Element[] = [];
  for (let i: number = 0; i <= maxAxisValue; i++) {
    valueCircles.push(
      <Circle
        key={`valueCircle-${i}`}
        fill={BasicColor.BLACK_TRANSPARENT}
        radius={i * valueLength}
        stroke={BasicColor.GRAY}
        width={width}
      />
    );
  }

  const axesLines: JSX.Element[] = [];
  const axesLabels: JSX.Element[] = [];
  for (let i: number = 0; i < axes.length; i++) {
    const x: number = (width / 2) * (1 + Math.sin(i * interAxisAngle));
    const y: number = width - (width / 2) * (1 + Math.cos(i * interAxisAngle));

    axesPoints[i] = { x, y };

    axesLines.push(
      <Line key={`axisLine-${i}`} x1={center.x} y1={center.y} x2={x} y2={y} />
    );

    axesLabels.push(
      <Text
        key={`valueCircle-${i}`}
        {...{ x, y }}
        transform={`translate(${0.2 * (x - center.x)}, ${
          0.2 * (y - center.y)
        })`}
      >
        {axes[i]}
      </Text>
    );
  }

  const valuesPoints: Array<Array<IPoint>> = [];
  const valuesPointsCircles: JSX.Element[] = [];
  const mainColorValuesPointsCircles: JSX.Element[] = [];
  for (let memberI: number = 0; memberI < values.length; memberI++) {
    valuesPoints[memberI] = [];

    for (let axisI: number = 0; axisI < axesPoints.length; axisI++) {
      if (!isNaN(values[memberI][axisI])) {
        const x: number =
          center.x +
          (axesPoints[axisI].x - center.x) *
            (values[memberI][axisI] / maxAxisValue);
        const y: number =
          center.y +
          (axesPoints[axisI].y - center.y) *
            (values[memberI][axisI] / maxAxisValue);

        valuesPoints[memberI].push({ x, y });

        if (colors[memberI] === mainColor) {
          mainColorValuesPointsCircles.push(
            <Circle
              key={`value-point-${memberI}-${axisI}`}
              fill={colors[memberI]}
              x={x}
              y={y}
              radius={8}
            />
          );
        } else {
          valuesPointsCircles.push(
            <Circle
              key={`value-point-${memberI}-${axisI}`}
              fill={colors[memberI]}
              x={x}
              y={y}
              radius={5}
            />
          );
        }
      }
    }
  }

  const valuesLines: JSX.Element[] = [];
  const mainColorValuesLines: JSX.Element[] = [];
  for (let memberI: number = 0; memberI < valuesPoints.length; memberI++) {
    for (let axisI: number = 0; axisI < axesPoints.length; axisI++) {
      if (valuesPoints[memberI][axisI + 1] !== undefined) {
        if (colors[memberI] === mainColor) {
          mainColorValuesLines.push(
            <Line
              key={`value-line-${memberI}-${axisI}`}
              stroke={colors[memberI]}
              strokeWidth={8}
              x1={valuesPoints[memberI][axisI].x}
              y1={valuesPoints[memberI][axisI].y}
              x2={valuesPoints[memberI][axisI + 1].x}
              y2={valuesPoints[memberI][axisI + 1].y}
            />
          );
        } else {
          valuesLines.push(
            <Line
              key={`value-line-${memberI}-${axisI}`}
              stroke={colors[memberI]}
              strokeWidth={2}
              x1={valuesPoints[memberI][axisI].x}
              y1={valuesPoints[memberI][axisI].y}
              x2={valuesPoints[memberI][axisI + 1].x}
              y2={valuesPoints[memberI][axisI + 1].y}
            />
          );
        }
      } else if (axisI === axesPoints.length - 1) {
        if (colors[memberI] === mainColor) {
          mainColorValuesLines.push(
            <Line
              key={`value-line-${memberI}-${axisI}`}
              stroke={colors[memberI]}
              strokeWidth={8}
              x1={valuesPoints[memberI][axisI].x}
              y1={valuesPoints[memberI][axisI].y}
              x2={valuesPoints[memberI][0].x}
              y2={valuesPoints[memberI][0].y}
            />
          );
        } else {
          valuesLines.push(
            <Line
              key={`value-line-${memberI}-${axisI}`}
              stroke={colors[memberI]}
              strokeWidth={2}
              x1={valuesPoints[memberI][axisI].x}
              y1={valuesPoints[memberI][axisI].y}
              x2={valuesPoints[memberI][0].x}
              y2={valuesPoints[memberI][0].y}
            />
          );
        }
      } else break;
    }
  }

  return (
    <svg height={width} width={width}>
      {/* CIRCLES */}
      {valueCircles}

      {/* AXES LINES */}
      {axesLines}

      {/* AXES LABELS */}
      {axesLabels}

      {/* VALUES */}
      {valuesPointsCircles}
      {valuesLines}

      {/* MAIN VALUES */}
      {mainColorValuesPointsCircles}
      {mainColorValuesLines}
    </svg>
  );
}

import React from "react";
import "./index.css";
import Square from "../Square";
import { BasicColor, MemberColor, SpecialColor } from "../../types";

interface IHeartProps {
  filled?: boolean;
  size?: number;
}

export default function Heart({ filled = false, size = 30 }: IHeartProps) {
  const step: number = size / 16;

  if (filled)
    return (
      <svg className="heart" width={size} height={size}>
        <Square
          x={3 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={4 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={5 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={10 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={11 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={12 * step}
          y={2 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={2 * step}
          y={3 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={3 * step}
          y={3 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={3 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={3 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={3 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={9 * step}
          y={3 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={10 * step}
          y={3 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={3 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={3 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={13 * step}
          y={3 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={1 * step}
          y={4 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={2 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={3 * step}
          y={4 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHT}
        />
        <Square
          x={4 * step}
          y={4 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHTER}
        />
        <Square
          x={5 * step}
          y={4 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHT}
        />
        <Square
          x={6 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={4 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={8 * step}
          y={4 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={9 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={4 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={13 * step}
          y={4 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={14 * step}
          y={4 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={0 * step}
          y={5 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={1 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={2 * step}
          y={5 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHT}
        />
        <Square
          x={3 * step}
          y={5 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHTER}
        />
        <Square
          x={4 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={5 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={13 * step}
          y={5 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={14 * step}
          y={5 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={15 * step}
          y={5 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={0 * step}
          y={6 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={1 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={2 * step}
          y={6 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHTER}
        />
        <Square
          x={3 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={6 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={13 * step}
          y={6 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={14 * step}
          y={6 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={15 * step}
          y={6 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={0 * step}
          y={7 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={1 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={2 * step}
          y={7 * step}
          size={1 * step}
          color={SpecialColor.RED_LIGHT}
        />
        <Square
          x={3 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={7 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={13 * step}
          y={7 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={14 * step}
          y={7 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={15 * step}
          y={7 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={0 * step}
          y={8 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={1 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={2 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={3 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={8 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={13 * step}
          y={8 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={14 * step}
          y={8 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={15 * step}
          y={8 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={1 * step}
          y={9 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={2 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={3 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={9 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={12 * step}
          y={9 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={13 * step}
          y={9 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={14 * step}
          y={9 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={2 * step}
          y={10 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={3 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={4 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={10 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={11 * step}
          y={10 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={12 * step}
          y={10 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={13 * step}
          y={10 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={3 * step}
          y={11 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={4 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={5 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={11 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={10 * step}
          y={11 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={11 * step}
          y={11 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={12 * step}
          y={11 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={4 * step}
          y={12 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={5 * step}
          y={12 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={6 * step}
          y={12 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={12 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={12 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={9 * step}
          y={12 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={10 * step}
          y={12 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={11 * step}
          y={12 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={5 * step}
          y={13 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={6 * step}
          y={13 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={7 * step}
          y={13 * step}
          size={1 * step}
          color={MemberColor.RED}
        />
        <Square
          x={8 * step}
          y={13 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={9 * step}
          y={13 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={10 * step}
          y={13 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={6 * step}
          y={14 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={7 * step}
          y={14 * step}
          size={1 * step}
          color={SpecialColor.RED_DARK}
        />
        <Square
          x={8 * step}
          y={14 * step}
          size={1 * step}
          color={SpecialColor.RED_DARKER}
        />
        <Square
          x={9 * step}
          y={14 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />

        <Square
          x={7 * step}
          y={15 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
        <Square
          x={8 * step}
          y={15 * step}
          size={1 * step}
          color={BasicColor.BLACK}
        />
      </svg>
    );

  return (
    <svg className="heart" width={size} height={size}>
      <Square
        x={3 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={4 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={5 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={10 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={11 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={12 * step}
        y={2 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={2 * step}
        y={3 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={6 * step}
        y={3 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={9 * step}
        y={3 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={13 * step}
        y={3 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={1 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={3 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={4 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={5 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={7 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={8 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={14 * step}
        y={4 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={0 * step}
        y={5 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={2 * step}
        y={5 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={3 * step}
        y={5 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={15 * step}
        y={5 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={0 * step}
        y={6 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={2 * step}
        y={6 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={15 * step}
        y={6 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={0 * step}
        y={7 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={2 * step}
        y={7 * step}
        size={1 * step}
        color={BasicColor.BLACK_TRANSPARENT}
      />
      <Square
        x={15 * step}
        y={7 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={0 * step}
        y={8 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={15 * step}
        y={8 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={1 * step}
        y={9 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={14 * step}
        y={9 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={2 * step}
        y={10 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={13 * step}
        y={10 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={3 * step}
        y={11 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={12 * step}
        y={11 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={4 * step}
        y={12 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={11 * step}
        y={12 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={5 * step}
        y={13 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={10 * step}
        y={13 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={6 * step}
        y={14 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={9 * step}
        y={14 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />

      <Square
        x={7 * step}
        y={15 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
      <Square
        x={8 * step}
        y={15 * step}
        size={1 * step}
        color={BasicColor.BLACK}
      />
    </svg>
  );
}

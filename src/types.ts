export enum BasicColor {
  BLACK = "rgb(0, 0, 0)",
  BLACK_TRANSPARENT = "rgba(0, 0, 0, 0.05)",
  GRAY = "rgb(127, 127, 127)",
  NONE = "rgba(0, 0, 0, 0)",
  WHITE = "rgb(255, 255, 255)",
}

export enum Esvp {
  EXPLORER = "Explorer",
  PRISONER = "Prisoner",
  SHOPPER = "Shopper",
  VACATIONER = "Vacationer",
}

export enum MemberColor {
  ARMY = "rgb(75, 83, 32)",
  BLUE = "rgb(0, 0, 130)",
  BROWN = "rgb(120, 70, 30)",
  CYAN = "rgb(0, 140, 130)",
  GREEN = "rgb(0, 140, 0)",
  ORANGE = "rgb(250, 100, 0)",
  PINK = "rgb(250, 50, 100)",
  PURPLE = "rgb(100, 0, 100)",
  RED = "rgb(220, 0, 0)",
  YELLOW = "rgb(230, 180, 0)",
}

export enum Page {
  ACTIONS = "actions",
  COHESION = "cohesion",
  ENDING = "ending",
  ESVP = "esvp",
  MEMBERS = "members",
  OPENING = "opening",
  SPEEDBOAT = "speedboat",
}

export enum SpecialColor {
  RED_DARK = "rgb(170, 0, 0)",
  RED_DARKER = "rgb(120, 0, 0)",
  RED_LIGHT = "rgb(200, 70, 70)",
  RED_LIGHTER = "rgb(200, 170, 170)",
}

export interface IMember {
  cohesion: number[];
  color: Color;
  esvp?: Esvp;
  name: string;
  picture: string;
}

export interface IPoint {
  x: number;
  y: number;
}

export type Color = BasicColor | MemberColor | SpecialColor;

export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength;
};

export const COHESION_AXES: Tuple<string, 5> = [
  "Trust",
  "Agreement",
  "Commitment",
  "Accountability",
  "Results",
];

export const ESVP_ORDER: Esvp[] = [
  Esvp.EXPLORER,
  Esvp.SHOPPER,
  Esvp.VACATIONER,
  Esvp.PRISONER,
];

export const MEMBERS_COLORS: MemberColor[] = [
  MemberColor.RED,
  MemberColor.BLUE,
  MemberColor.GREEN,
  MemberColor.YELLOW,
  MemberColor.CYAN,
  MemberColor.ORANGE,
  MemberColor.PINK,
  MemberColor.PURPLE,
  MemberColor.BROWN,
  MemberColor.ARMY,
];

export const PAGES_ORDER: Page[] = [
  Page.OPENING,
  Page.MEMBERS,
  Page.COHESION,
  Page.SPEEDBOAT,
  Page.ACTIONS,
  Page.ESVP,
  Page.ENDING,
];

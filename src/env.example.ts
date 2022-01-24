import { IMember } from "./types";

export const MEMBERS: Array<Pick<IMember, "name" | "picture">> = [
  { name: "Member X", picture: require("./images/members/memberX.png") },
];

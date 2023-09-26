import { TypedObject } from "sanity";

export interface ISocialIconItem {
  _id: string;
  path: string;
  iconName: TIconType;
  ariaLabel: string;
}
export type TIconType =
  | "hamburger"
  | "close"
  | "facebook"
  | "pinterest"
  | "twitter"
  | "instagram"
  | "twitterCheck"
  | "linkedin"
  | "frontend-mentor"
  | "paintBucket"
  | "arrow"
  | "backArrow"
  | "openWindow";

export type Tthemestype =
  | "light"
  | "dark"
  | "system"
  | "banana"
  | "chatgpt"
  | "chocobo"
  | "adriatic"
  | "sephiroth"
  | "brownie"
  | "zerg";

export interface IProjectData {
  _id: string;
  title: string;
  image: string;
  video: string;
  technologies: { title: string }[];
  categories: { title: string }[];
  createdAt: string;
  repository: string;
  live: string;
  priority: number;
  body: TypedObject | TypedObject[];
}

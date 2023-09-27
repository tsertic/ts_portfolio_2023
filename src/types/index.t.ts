import { TypedObject } from "sanity";

export interface ISocialIconItem {
  _id: string;
  path: string;
  iconName: TIconType;
  ariaLabel: string;
}
export interface IContactFormData {
  name: string;
  email: string;
  message: string;
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
  | "openWindow"
  | "github";

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

export type TfilterOptions = "all" | "fullstack" | "frontend";

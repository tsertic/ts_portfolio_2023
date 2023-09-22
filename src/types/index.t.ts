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
  | "frontend-mentor";

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

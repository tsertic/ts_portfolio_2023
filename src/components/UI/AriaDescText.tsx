import React from "react";
interface IAriaDescText {
  children: React.ReactNode;
}
export const AriaDescText: React.FC<IAriaDescText> = ({ children }) => {
  return (
    <span className=" invisible absolute top-0 left-0 w-1 h-1">{children}</span>
  );
};

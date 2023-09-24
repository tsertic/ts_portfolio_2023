import React from "react";
interface IPageTitle {
  children: React.ReactNode;
}
export const PageTitle: React.FC<IPageTitle> = ({ children }) => {
  return (
    <h1 className="md:text-headingXL text-headingXLMobile text-center">
      {children}
    </h1>
  );
};

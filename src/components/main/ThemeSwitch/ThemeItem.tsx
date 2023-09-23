import { selectCurrentTheme } from "@/redux/features/theme.slice";
import { Tthemestype } from "@/types/index.t";
import React from "react";
import { useSelector } from "react-redux";
interface IThemeItem {
  theme: Tthemestype;
  setTheme: (theme: Tthemestype) => void;
}
export const ThemeItem: React.FC<IThemeItem> = ({ theme, setTheme }) => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <li key={theme}>
      <button
        className={` flex flex-col items-center gap-[5px]  bg-base-100 text-base-content border-2 rounded-[5px]  pt-[5px] pb-[8px] px-[15px] ${
          currentTheme === theme ? "border-primary" : "border-transparent"
        } shadow-sm hover:scale-110 hover:shadow-themeHover  transition-universal focus:scale-100 focus:shadow-sm`}
        aria-label="select color theme 'Light'"
        data-theme={theme}
        onClick={() => setTheme(theme)}
      >
        <span>{theme}</span>
        <span className="flex mr-[-5px]" aria-hidden={true}>
          <span className="bg-primary color-circle"></span>
          <span className="bg-secondary color-circle"></span>
          <span className="bg-base-200 color-circle"></span>
          <span className="bg-base-300 color-circle"></span>
          <span className="bg-neutral color-circle"></span>
        </span>
      </button>
    </li>
  );
};

import React from "react";
import { AriaDescText } from "./AriaDescText";
import { Icons } from "./Icons";
import { useDispatch } from "react-redux";
import { toggleThemeDrawer } from "@/redux/features/theme.slice";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleThemeDrawer())}
      aria-label="themes drawer"
    >
      <AriaDescText>themes drawer</AriaDescText>
      <div className="rounded-full p-[6px] bg-base-200 hover:bg-base-300 transition-universal">
        <Icons
          iconName="paintBucket"
          className="w-[30px] h-[30px] fill-base-content "
        />
      </div>
    </button>
  );
};

"use client";
import { useState, useEffect, Suspense } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { AriaDescText } from "../../UI/AriaDescText";
import {
  selectAllThemesType,
  selectCurrentTheme,
  setCurrentTheme,
} from "@/redux/features/theme.slice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeItem } from "./ThemeItem";
import { Tthemestype } from "@/types/index.t";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const themesArray = useSelector(selectAllThemesType);
  const dispatch = useDispatch();
  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");

    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const setThemeHandler = (theme: string) => {
    setTheme(theme);
    dispatch(setCurrentTheme(theme));
  };
  return (
    <div className="py-[20px] pb-[30px] bg-base-100 shadow-themeContainer">
      <p className="text-center mb-[15px] text-bodyM">Select Theme</p>
      <ul
        id="theme-menu"
        className="flex gap-[20px] w-full max-w-[1400px] mx-auto test-border"
      >
        {themesArray.map((theme) => {
          return <ThemeItem theme={theme} setTheme={setThemeHandler} />;
        })}
      </ul>
    </div>
  );
};

export default ThemeSwitch;

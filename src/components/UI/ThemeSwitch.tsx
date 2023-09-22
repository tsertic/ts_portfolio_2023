"use client";
import { useState, useEffect, Suspense } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { AriaDescText } from "./AriaDescText";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    //check if there is prefers color scheme:dark and no theme in local storage , if true set light as starter theme
    if (
      !currentTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <button
      className={` flex min-w-[60px]   z-[10] rounded-[15px] border-2 p-[2px] border-white/40 gap-[10px] cursor-pointer transition-universal`}
      onClick={toggleThemeHandler}
    >
      <AriaDescText>Toggle theme</AriaDescText>
      <div aria-hidden="true">
        <Image
          width={24}
          height={24}
          src="/images/icon-sun-moon.png"
          alt="dark mode"
          className={` transition-universal ${
            theme === "dark" ? "translate-x-[25px] rotate-180" : "translate-x-0"
          }`}
          loading="eager"
        />
      </div>
    </button>
  );
};

export default ThemeSwitch;

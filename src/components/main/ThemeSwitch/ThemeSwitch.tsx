"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  selectShowDrawer,
  setCurrentTheme,
} from "@/redux/features/theme.slice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ThemeCarousel } from "./ThemeCarousel";
import { AnimatePresence } from "framer-motion";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const showDrawer = useSelector(selectShowDrawer);
  const dispatch = useDispatch();
  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) setTheme("light");
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
    <>
      <AnimatePresence>
        <motion.div
          layout
          transition={{
            duration: 1,

            damping: 25,
            stiffness: 500,
          }}
          animate={{
            height: showDrawer ? "auto" : 0,
            y: showDrawer ? 0 : -200,
          }}
          className={` bg-base-100 shadow-themeContainer w-full origin-top overflow-hidden `}
        >
          <motion.div className="pt-[20px]">
            <motion.h3 className="text-center mb-[5px] text-bodyM">
              Select Theme
            </motion.h3>
            <ThemeCarousel setTheme={setThemeHandler} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitch;

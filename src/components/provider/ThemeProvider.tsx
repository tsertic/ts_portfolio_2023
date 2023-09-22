"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useSelector } from "react-redux";
import { selectAllThemesType } from "@/redux/features/theme.slice";
export const ThemeProviderC: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themes = useSelector(selectAllThemesType);
  return (
    //if you want more than dark or light theme,then themes array is needed
    <ThemeProvider attribute="data-theme" themes={themes}>
      {children}
    </ThemeProvider>
  );
};

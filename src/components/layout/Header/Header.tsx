"use client";
import { AriaDescText } from "@/components/UI/AriaDescText";
import { BrandLogo } from "@/components/UI/BrandLogo";
import { Icons } from "@/components/UI/Icons";
import { ThemeButton } from "@/components/UI/ThemeButton";
import { toggleThemeDrawer } from "@/redux/features/theme.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesktopNavigation } from "./DesktopNavigation";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="pt-[20px] md:pt-[30px]">
      <div className="container-wide justify-between flex items-center">
        <BrandLogo />
        <div className="flex items-center gap-[40px]">
          <DesktopNavigation />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

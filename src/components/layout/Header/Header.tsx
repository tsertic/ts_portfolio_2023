"use client";
import { BrandLogo } from "@/components/UI/BrandLogo";
import { toggleThemeDrawer } from "@/redux/features/theme.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="container-wide">
        <BrandLogo />
        <nav>desktop nav</nav>
        <button onClick={() => dispatch(toggleThemeDrawer())}>
          Theme Toggle
        </button>
      </div>
    </header>
  );
};

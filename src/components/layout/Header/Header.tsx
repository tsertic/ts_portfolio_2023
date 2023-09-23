"use client";
import { toggleThemeDrawer } from "@/redux/features/theme.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div>Brand</div>
      <nav>desktop nav</nav>
      <button onClick={() => dispatch(toggleThemeDrawer())}>
        Theme Toggle
      </button>
    </header>
  );
};

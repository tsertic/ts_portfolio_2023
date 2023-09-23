"use client";
import { BrandLogo } from "@/components/UI/BrandLogo";
import { ThemeButton } from "@/components/UI/ThemeButton";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const dispatch = useDispatch();
  const handleOpenMenu = () => {
    setMenuShow(true);
  };
  const handleCloseMenu = () => setMenuShow(false);
  return (
    <>
      <header className="pt-[20px] md:pt-[30px]">
        <div className="container-wide justify-between flex items-center">
          <BrandLogo />
          <div className="flex items-center gap-[20px] md:gap-[40px] md:flex-row-reverse">
            <ThemeButton />
            <button
              className="md:hidden text-[20px] uppercase"
              aria-label="menu"
              onClick={handleOpenMenu}
            >
              Menu
            </button>
            <DesktopNavigation />
          </div>
        </div>
        <AnimatePresence>
          {menuShow && (
            <MobileMenu show={menuShow} closeMenu={handleCloseMenu} />
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

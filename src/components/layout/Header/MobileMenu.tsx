"use client";
import React from "react";
interface IMobileMenu {
  show: boolean;
  closeMenu: () => void;
}
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
export const MobileMenu: React.FC<IMobileMenu> = ({ show, closeMenu }) => {
  const menuVars = {
    initial: {
      translateY: -1500,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      translateY: 0,
      display: "block",
      transition: { duration: 0.5, ease: [0.11, 0, 0.3, 0], delayChildren: 1 },
    },
    exit: {
      translateY: -1500,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed left-0 top-0 h-screen w-screen bg-neutral text-neutral-content origin-top z-40`}
    >
      <div className="container-wide pt-[30px] h-full">
        <div className="text-end">
          <button onClick={closeMenu} className="text-[20px] uppercase ">
            Close
          </button>
        </div>
        <nav className="h-full flex justify-center items-center">
          <ul className="flex flex-col gap-[25px]">
            {NAV_LINKS.map((link) => {
              return (
                <li key={link._id} className="overflow-hidden">
                  <Link
                    href={link.path}
                    aria-label={link.ariaLabel}
                    className="text-navMobile uppercase"
                    onClick={() => closeMenu()}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

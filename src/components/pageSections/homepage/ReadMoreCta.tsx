"use client";
import { Icons } from "@/components/UI/Icons";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export const ReadMoreCta = () => {
  const arrowVars = {
    animate: {
      translateX: "20px",
      transition: {
        repeat: "Infinity",
        duration: 1,
        repeatType: "mirror",
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };
  return (
    <div className="max-w-[850px] mx-auto">
      <Link
        href="/about"
        aria-label="Get to know me better"
        className="flex items-center link-hover w-fit font-bold"
      >
        Get to know me better
        <motion.span
          animate={{ translateX: 20 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "mirror",
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          aria-hidden="true"
          className="pl-[10px] mt-[2px]"
        >
          <Icons iconName="arrow" className="w-[24px] h-[24px]" />
        </motion.span>
      </Link>
    </div>
  );
};

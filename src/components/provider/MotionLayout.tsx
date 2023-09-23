"use client";
import React, { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MotionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AnimatePresence>
      <motion.div layout layoutRoot>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

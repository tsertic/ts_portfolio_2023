import { selectAllThemesType } from "@/redux/features/theme.slice";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeItem } from "./ThemeItem";
import { Tthemestype } from "@/types/index.t";
// @ts-ignore
import { debounce } from "lodash";
interface IThemeCarousel {
  setTheme: (theme: Tthemestype) => void;
}
export const ThemeCarousel: React.FC<IThemeCarousel> = ({ setTheme }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const themesArray = useSelector(selectAllThemesType);
  const [constraintLeft, setConstraintLeft] = useState(0);
  const [node, setNode] = useState<HTMLElement>();
  //fix for framer-motion bug when resized window that constraints are gone
  //copied from https://github.com/framer/motion/issues/1659 - user dimitrisanastasiadis
  const containerRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    setNode(node);
  }, []);

  useEffect(() => {
    if (!node) return;

    const handleResize = debounce(() => {
      setConstraintLeft(-(node.scrollWidth - node.clientWidth));
    }, 500);

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [node]);

  return (
    <motion.div
      ref={carouselRef}
      className=" max-w-[1400px] mx-auto overflow-hidden  border-2 border-neutral/10 rounded-[4px] "
    >
      <motion.ul
        id="theme-menu"
        className="flex gap-[25px] w-full pt-[10px] cursor-pointer pb-[20px] tap-highlight-removed "
        drag="x"
        ref={containerRef}
        dragConstraints={{ right: 30, left: constraintLeft - 30 }}
      >
        {themesArray.map((theme) => {
          return <ThemeItem theme={theme} key={theme} setTheme={setTheme} />;
        })}
      </motion.ul>
    </motion.div>
  );
};

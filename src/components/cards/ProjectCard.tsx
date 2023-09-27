"use client";
import { IProjectData } from "@/types/index.t";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface IProjectCard {
  cardData: IProjectData;
  handleClick: (data: IProjectData) => void;
}
export const ProjectCard: React.FC<IProjectCard> = ({
  cardData,
  handleClick,
}) => {
  const { title, image, technologies, categories } = cardData;

  return (
    <motion.button
      layout
      layoutId={title}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, type: "just" }}
      onClick={() => handleClick(cardData)}
      className="rounded-[10px] h-[230px] md:h-[250px] lg:h-[300px] overflow-hidden shadow-md hover:shadow-primary/20 group relative border-neutral/20 border-[2px] w-full "
    >
      <Image
        src={image}
        alt="title"
        width={500}
        height={300}
        loading="eager"
        className="w-full h-full"
      />
      <span className="absolute p-[15px] left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral/70  transition-universal text-neutral-content flex flex-col gap-[25px] justify-end items-start ">
        <span className="text-headingMMobile md:text-headingM">{title}</span>
        <span className="flex gap-[3px]">
          {technologies.map((tech) => {
            return (
              <span
                key={tech.title}
                className="bg-neutral-content text-neutral px-[4px] text-[14px] rounded-[5px]"
              >
                #{tech.title}
              </span>
            );
          })}
        </span>
      </span>
    </motion.button>
  );
};

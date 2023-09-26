import { FILTER_OPTIONS } from "@/constants";
import React from "react";
const filterOptions = [""];
export const ProjectFilter = () => {
  return (
    <ul className=" mx-auto max-w-[600px] flex gap-[20px] justify-center">
      {FILTER_OPTIONS.map((option) => {
        return (
          <li key={option}>
            <button className="inline-block py-[1px] px-[15px] border-[1px] border-transparent bg-base-200 rounded-md shadow-md text-bodyM hover:border-primary hover:bg-neutral hover:text-neutral-content transition-universal">
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

"use client";
import { FILTER_OPTIONS } from "@/constants";
import {
  filterProjectsByCategory,
  selectProjectFilterOpt,
} from "@/redux/features/projects.slice";
import { TfilterOptions } from "@/types/index.t";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const ProjectFilter = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectProjectFilterOpt);
  const handleFilterButton = (option: TfilterOptions) => {
    dispatch(filterProjectsByCategory(option));
  };
  return (
    <ul className=" mx-auto max-w-[600px] flex gap-[20px] justify-center">
      {FILTER_OPTIONS.map((option) => {
        return (
          <li key={option}>
            <button
              onClick={() => {
                handleFilterButton(option);
              }}
              className={`inline-block py-[1px] px-[15px] border-[1px] border-transparent bg-base-200 rounded-md shadow-md text-bodyM capitalize hover:bg-neutral hover:text-neutral-content transition-universal ${
                option === selectedFilter && "bg-base-content !text-base-100"
              }`}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

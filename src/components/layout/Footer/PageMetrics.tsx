import { AriaDescText } from "@/components/UI/AriaDescText";
import { pageMetrics } from "@/constants";
import React from "react";

export const PageMetrics = () => {
  return (
    <a
      href="https://pagespeed.web.dev/analysis/https-tsertic-dev/wvjaw29jxw?form_factor=desktop"
      aria-label="page metrics"
      target="_blank"
    >
      <AriaDescText>External link to page Metrics</AriaDescText>
      <span
        aria-hidden="true"
        className="flex max-md:flex-col gap-[5px] md:gap-[10px] items-center"
      >
        {pageMetrics.map((item) => {
          return (
            <span
              title={`${item.text} - ${item.score}`}
              key={item._id}
              className=" w-[30px] h-[30px] border-[2px] bg-green-100 text-green-900 border-green-500 rounded-full p-[6px] text-[10px] flex items-center justify-center font-bold"
            >
              {item.score}
            </span>
          );
        })}
        <span className="text-[14px]">259 KiB</span>
      </span>
    </a>
  );
};

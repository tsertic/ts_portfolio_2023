import React from "react";
import { ServicesText } from "./ServicesText";

export const HeroIntro = () => {
  return (
    <div className="pt-[75px] md:pt-[150px] w-full max-w-[850px] mx-auto ">
      <h1 className="uppercase text-primary font-bold mb-[16px]">
        Hello, my name is Tomislav
      </h1>
      <h2 className="text-headingLMobile md:text-headingL mb-[24px] md:mb-[32px] tracking-[5px] uppercase font-normal flex flex-col md:flex-row w-full">
        <span>I make</span> <ServicesText />
      </h2>
      <ul className="pl-[16px] flex flex-col gap-[5px] md:gap-[8px]">
        <li>
          <span className="list-dot"></span>
          Based in the charming city of Zagreb, Croatia, I am Tomislav Sertic, a
          dedicated full-stack developer who leans more towards the artistry of
          front-end development.
        </li>
        <li>
          <span className="list-dot"></span>
          My coding journey revolves around harnessing the power of JavaScript,
          React, Next.js, Node.js, and TypeScript to create captivating
          websites, innovative applications, and robust REST API services.
        </li>
        <li>
          <span className="list-dot"></span>
          With a strong foundation in modern web technologies, I am driven by a
          relentless pursuit of perfection, always striving to merge creativity
          with functionality, and make the digital world a more engaging and
          user-friendly place. My work is not just lines of code; it&apos;s a
          symphony of design, interactivity, and seamless functionality.
        </li>
      </ul>
    </div>
  );
};

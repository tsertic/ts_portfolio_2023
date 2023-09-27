import React from "react";
import { ServicesText } from "./ServicesText";

export const HeroIntro = () => {
  return (
    <div className=" container-large mb-[40px] md:mb-[50px]">
      <h1 className="uppercase text-primary font-bold mb-[16px]">
        Hello, my name is Tomislav
      </h1>
      <h2 className="text-headingLMobile md:text-headingL mb-[24px] md:mb-[32px] tracking-[5px] uppercase font-normal md:gap-[20px] flex flex-col md:flex-row w-full">
        <span>I make</span> <ServicesText />
      </h2>
      <ul className="pl-[16px] flex flex-col gap-[15px] md:gap-[18px]">
        <li>
          <span className="list-dot"></span>
          Based in the charming city of Zagreb, Croatia, I am{" "}
          <span className="text-primary font-bold">Tomislav Sertic</span>, a
          dedicated full-stack developer who leans more towards the artistry of
          front-end development.
        </li>
        <li>
          <span className="list-dot"></span>
          My coding journey centers on harnessing the versatility of{" "}
          <span className="text-primary font-bold">JavaScript</span>,{" "}
          <span className="text-primary font-bold">TypeScript</span>,{" "}
          <span className="text-primary font-bold">React</span>,
          <span className="text-primary font-bold"> Next.js</span>,{" "}
          <span className="text-primary font-bold">Node.js</span>, and an array
          of database technologies to craft captivating websites, innovative
          applications, and robust REST API services that seamlessly connect
          data and user experiences
        </li>
      </ul>
    </div>
  );
};

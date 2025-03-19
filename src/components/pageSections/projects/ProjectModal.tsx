import { IProjectData } from "@/types/index.t";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/UI/Icons";
import { AriaDescText } from "@/components/UI/AriaDescText";
import { PortableText } from "@portabletext/react";
import { CustomPortableTextComponents } from "@/components/sanity/CustomPortableTextComponents";
import { isImageFile, isVideoFile } from "@/lib";
import Image from "next/image";
interface IProjectModal {
  project: IProjectData;
  closeModal: () => void;
}

export const ProjectModal: React.FC<IProjectModal> = ({
  project,
  closeModal,
}) => {
  const { technologies, live, repository, title, video, body, categories } =
    project;
  const getCategory = () => {
    let arr = Object.values(categories).map((cat) => cat.title);
    return arr;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 w-screen h-screen z-40  "
    >
      <div
        className="absolute left-0 top-0 w-full bg-black/60 cursor-pointer h-full"
        onClick={closeModal}
      ></div>
      <motion.div
        initial={{ right: "-150%" }}
        animate={{ right: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="absolute h-screen w-full md:w-[600px] bg-base-100 flex flex-col   z-60 px-[20px] "
      >
        <div className="py-[15px] border-b-[1px] border-neutral/10 w-full mb-[40px] flex justify-between items-center">
          <button onClick={closeModal} aria-label="back to projects">
            <AriaDescText>back to projects</AriaDescText>
            <span aria-hidden="true">
              <Icons
                iconName="backArrow"
                className="w-[24px] bg-transparent fill-transparent stroke-base-content hover:stroke-primary transition-universal"
              />
            </span>
          </button>
          <p
            onClick={closeModal}
            className="cursor-pointer link-hover font-bold"
          >
            Back To Projects
          </p>
        </div>
        <article className="overflow-y-auto pb-[100px]">
          <h3 className="text-headingSMobile md:text-headingS mb-[20px] !font-bold ">
            {title}
          </h3>
          {isVideoFile(video) ? (
            <video
              src={video}
              autoPlay={true}
              loop={true}
              width={600}
              height={300}
              className="w-full mb-[20px]"
            ></video>
          ) : isImageFile(video) ? (
            <Image
              src={video}
              width={600}
              height={300}
              className="w-full mb-[20px]"
              alt={title}
            />
          ) : null}

          <div className="mb-[20px]">
            <h3 className="text-bodyL font-bold">About:</h3>
            <PortableText
              value={body}
              components={CustomPortableTextComponents}
            />
          </div>
          <div className="mb-[20px]">
            <h3 className="mb-[4px] font-bold">Technologies:</h3>
            <ul className="flex gap-[8px] flex-wrap">
              {technologies.map((tech) => {
                return (
                  <li
                    className=" bg-base-300 px-[10px] rounded-[5px]"
                    key={tech.title}
                  >
                    {tech.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-[20px]">
            <h3 className="mb-[4px] font-bold">Website</h3>
            <a
              href={live}
              target="_blank"
              aria-label={live}
              className="link-hover"
            >
              {live}
            </a>
          </div>
          <div className="mb-[20px]">
            <h3 className="mb-[4px] font-bold">Github</h3>
            <a
              href={repository}
              target="_blank"
              aria-label={repository}
              className="link-hover"
            >
              {repository}
            </a>
          </div>
        </article>
        <a
          href={live}
          target="_blank"
          aria-label="open project"
          className="absolute flex justify-center gap-[10px] w-full bottom-0 left-0 bg-base-content text-base-100 py-[20px] text-center group "
        >
          <span className="border-b-[1px] border-transparent group-hover:border-base-100 transition-universal font-bold ">
            Open Project
          </span>
          <Icons iconName="openWindow" className="w-[20px] fill-base-100" />
        </a>
      </motion.div>
    </motion.div>
  );
};

"use client";

import React, { useState } from "react";
import { IProjectData } from "@/types/index.t";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
export const ProjectList = ({ projects }: { projects: IProjectData[] }) => {
  const [showProject, setShowProject] = useState<null | IProjectData>(null);

  const handleOpenProject = (project: IProjectData) => {
    setShowProject(project);
  };
  const handleClosePoject = () => {
    setShowProject(null);
  };
  return (
    <div className="flex max-md:flex-col flex-wrap gap-[15px]">
      {projects.map((project) => {
        const { _id } = project;
        return (
          <ProjectCard
            key={_id}
            handleClick={handleOpenProject}
            cardData={project}
          />
        );
      })}
      {showProject && (
        <AnimatePresence>
          <ProjectModal project={showProject} closeModal={handleClosePoject} />
        </AnimatePresence>
      )}
    </div>
  );
};

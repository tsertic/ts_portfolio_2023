"use client";

import React, { useEffect, useState } from "react";
import { IProjectData } from "@/types/index.t";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  fillProjectsData,
  selectAllProjects,
  selectProjectFilterOpt,
} from "@/redux/features/projects.slice";
import { motion } from "framer-motion";
export const ProjectList = ({ projects }: { projects: IProjectData[] }) => {
  const dispatch = useDispatch();
  const filteredProjects = useSelector(selectAllProjects);
  const filter = useSelector(selectProjectFilterOpt);
  const [showProject, setShowProject] = useState<null | IProjectData>(null);
  useEffect(() => {
    if (!filteredProjects) {
      dispatch(fillProjectsData(projects));
    }
  }, [projects]);
  const handleOpenProject = (project: IProjectData) => {
    setShowProject(project);
  };
  const handleClosePoject = () => {
    setShowProject(null);
  };
  return (
    <AnimatePresence>
      <motion.div layoutRoot className="grid md:grid-cols-2 gap-[20px]">
        {filter === "all"
          ? projects.map((project) => {
              const { _id } = project;
              return (
                <ProjectCard
                  key={_id}
                  handleClick={handleOpenProject}
                  cardData={project}
                />
              );
            })
          : filteredProjects?.map((project) => {
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
            <ProjectModal
              project={showProject}
              closeModal={handleClosePoject}
            />
          </AnimatePresence>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

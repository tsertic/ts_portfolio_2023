"use client";

import React, { Suspense, useEffect, useState } from "react";
import { IProjectData } from "@/types/index.t";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  fillProjectsData,
  selectAllProjects,
  selectProjectFilterOpt,
  selectProjectShow,
  showNextX,
} from "@/redux/features/projects.slice";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const ProjectList = ({ projects }: { projects: IProjectData[] }) => {
  const dispatch = useDispatch();
  const filteredProjects = useSelector(selectAllProjects);
  const showProjectsNumber = useSelector(selectProjectShow);
  const filter = useSelector(selectProjectFilterOpt);
  const [showProject, setShowProject] = useState<null | IProjectData>(null);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  //when in view add next 12 items , infinite scrolling
  useEffect(() => {
    if (inView) {
      dispatch(showNextX(4));
    }
  }, [inView]);
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
      <motion.div layoutRoot layout className="grid md:grid-cols-2 gap-[20px]">
        {filter === "all"
          ? projects.slice(0, showProjectsNumber).map((project) => {
              const { _id } = project;
              return (
                <ProjectCard
                  key={_id}
                  handleClick={handleOpenProject}
                  cardData={project}
                />
              );
            })
          : filteredProjects?.slice(0, showProjectsNumber).map((project) => {
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
        {projects && <div ref={ref}></div>}
      </motion.div>
    </AnimatePresence>
  );
};

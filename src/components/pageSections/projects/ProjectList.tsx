"use client";
//TODO ADD TYPES TO PROJECT DATA AND THIS WHOLE COMPONENT
import React, { useState } from "react";
import Image from "next/image";
export const ProjectList = ({ projects }: { projects: any }) => {
  console.dir(projects[0].video);
  const [showIndividualProject, setShowIndividualProject] = useState<any>(null);

  return (
    <div className="flex">
      {projects.map((project: any) => {
        const { image, title, _id } = project;
        return (
          <div
            key={project._id}
            onClick={() => setShowIndividualProject(project)}
            className="test-border "
          >
            <h1>{project.title}</h1>;
            <Image src={image} alt="title" width={400} height={200} />
          </div>
        );
      })}
      {showIndividualProject && (
        <div
          className="fixed left-0 top-0 w-screen h-screen z-40 bg-black/20 "
          onClick={() => setShowIndividualProject(null)}
        >
          <div className="fixed right-0 top-0 h-screen w-[400px] bg-slate-300 flex flex-col  items-center z-40 ">
            <h1>{showIndividualProject.title} ABC</h1>
            <video
              src={showIndividualProject.video}
              autoPlay={true}
              width={300}
              height={150}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

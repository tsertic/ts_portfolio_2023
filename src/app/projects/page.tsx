import { PageTitle } from "@/components/UI/PageTitle";
import { ProjectFilter } from "@/components/pageSections/projects/ProjectFilter";
import React from "react";
import { getProjects } from "../../../sanity/actions";
import { ProjectList } from "@/components/pageSections/projects/ProjectList";

const ProjectsPage = async () => {
  const projects = await getProjects();
  console.log(projects);
  return (
    <main className="container-wide page-padding relative">
      <PageTitle>Projects</PageTitle>
      <section>
        <ProjectFilter />
      </section>
      <section>{projects && <ProjectList projects={projects} />}</section>
    </main>
  );
};
export default ProjectsPage;

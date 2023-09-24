import { PageTitle } from "@/components/UI/PageTitle";
import { AboutIntro } from "@/components/pageSections/about/AboutIntro";
import React from "react";

const AboutPage = () => {
  return (
    <main className=" page-top-padding">
      <PageTitle>Hello there.</PageTitle>
      <section className="pt-[80px] mb-[60px]">
        <AboutIntro />
      </section>
      <section>Work</section>
    </main>
  );
};
export default AboutPage;

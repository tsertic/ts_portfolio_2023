import { PageTitle } from "@/components/UI/PageTitle";
import { AboutInfo } from "@/components/pageSections/about/AboutInfo";
import { AboutIntro } from "@/components/pageSections/about/AboutIntro";
import React from "react";

const AboutPage = () => {
  return (
    <main className=" page-padding">
      <PageTitle>Hello there.</PageTitle>
      <section className="pt-[80px] mb-[60px]">
        <AboutIntro />
      </section>
      <section>
        <AboutInfo />
      </section>
    </main>
  );
};
export default AboutPage;

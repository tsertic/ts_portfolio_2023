import { PageTitle } from "@/components/UI/PageTitle";
import { PrivacyPolicy } from "@/components/pageSections/privacyPolicy/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <main className="container-wide page-padding">
      <PageTitle>Privacy Policy.</PageTitle>
      <section className="container-article">
        <PrivacyPolicy />
      </section>
    </main>
  );
};

export default page;

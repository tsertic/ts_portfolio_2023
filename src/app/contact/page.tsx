import { PageTitle } from "@/components/UI/PageTitle";
import { Contact } from "@/components/pageSections/contact/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <main className=" container-wide page-padding">
      <PageTitle>Contact.</PageTitle>
      <section className="mt-[40px] md:pl-[40px]">
        <Contact />
      </section>
    </main>
  );
};
export default ContactPage;

import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="container-large ">
      <p className="mb-[10px] md:mb-[20px]">
        Feel free to contact me via this form,{" "}
        <a
          href="mailto:tsertic5@gmail.com"
          aria-label="email"
          className="article-text-link !border-b-base-content/50"
        >
          email
        </a>{" "}
        or just send me dm on{" "}
        <a
          href="https://www.linkedin.com/in/tomislav-serti%C4%87-85a0941a3/"
          aria-label="linkedin"
          className="article-text-link !border-b-base-content/50"
          target="_blank"
        >
          linkedin
        </a>
        .
      </p>
      <ContactForm />
    </div>
  );
};

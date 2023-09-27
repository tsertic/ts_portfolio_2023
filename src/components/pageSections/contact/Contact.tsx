import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="container-large ">
      <p className="mb-[10px] md:mb-[20px]">
        Feel free to contact me via this form,email or just send me dm on
        linkedin.
      </p>
      <ContactForm />
    </div>
  );
};

"use client";
import { FormButton } from "@/components/UI/FormElements/FormButton";
import { FormInput } from "@/components/UI/FormElements/FormInput";
import { FormTextArea } from "@/components/UI/FormElements/FormTextArea";
import React, { EventHandler, ReactEventHandler, useState } from "react";
import { sendContactForm } from "../../../../sanity/actions";
const resStatusInitial = {
  msgSent: false,
  success: false,
  msg: "",
};
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);
  const [resStatus, setResStatus] = useState(resStatusInitial);
  const isValid = Boolean(name) && Boolean(email) && Boolean(message);
  const handleMessageInput = (value: string) => setMessage(() => value);
  const handleNameInput = (value: string) => setName(() => value);
  const handleEmailInput = (value: string) => setEmail(() => value);

  const handleFormSubmit: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setCheckStatus(() => true);
      setTimeout(() => {
        setCheckStatus(() => false);
      }, 2000);
      return;
    }
    if (isValid) {
      const res = await sendContactForm({ name, email, message });
      if (res.success) {
        setName("");
        setEmail("");
        setMessage("");
      }
      setResStatus({ success: res.success, msgSent: true, msg: res.msg });
      setTimeout(() => {
        setResStatus(() => resStatusInitial);
      }, 4000);
    }
  };
  return (
    <form
      className="flex flex-col items-start gap-[20px] py-[20px] w-full max-w-[570px] pb-[40px] md:pb-0"
      onSubmit={handleFormSubmit}
    >
      <FormInput
        handleChange={handleNameInput}
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        status={checkStatus ? Boolean(name) : true}
      />
      <FormInput
        handleChange={handleEmailInput}
        name="email"
        type="email"
        value={email}
        placeholder="Email"
        status={checkStatus ? Boolean(email) : true}
      />
      <FormTextArea
        handleChange={handleMessageInput}
        name="message"
        value={message}
        placeholder="Message"
        status={checkStatus ? Boolean(message) : true}
      />
      <FormButton status={isValid}>Send Message</FormButton>

      <p
        className={`${resStatus.msgSent ? " visible" : "invisible"} ${
          resStatus.success ? "text-green-500" : "text-red-500"
        } block h-[10px]`}
      >
        {resStatus.msg}
      </p>
    </form>
  );
};

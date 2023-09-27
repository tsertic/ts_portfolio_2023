import React from "react";
interface IFormButton {
  children: React.ReactNode;
  status: boolean;
}
export const FormButton: React.FC<IFormButton> = ({ children, status }) => {
  return (
    <button
      type="submit"
      aria-label="Send Message"
      className={`py-[8px] px-[16px] bg-base-content text-base-100 rounded-[5px] shadow-md border-[2px] border-transparent ${
        status
          ? "hover:border-green-500 hover:text-green-500"
          : "hover:border-red-500 hover:text-red-500"
      } transition-universal`}
    >
      {children}
    </button>
  );
};

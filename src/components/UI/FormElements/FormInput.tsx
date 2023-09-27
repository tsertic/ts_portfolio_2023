"use client";
import React from "react";
interface IFormInput {
  placeholder: string;
  handleChange: (value: string) => void;
  type: string;
  name: string;
  value: string;
  status: boolean;
}
export const FormInput: React.FC<IFormInput> = ({
  placeholder,
  type,
  handleChange,
  name,
  value,
  status,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={` form-input ${!status && "!border-red-500/50"}`}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

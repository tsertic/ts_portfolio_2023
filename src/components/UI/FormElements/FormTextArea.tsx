import React from "react";
interface IFormTextArea {
  placeholder: string;
  handleChange: (value: string) => void;

  name: string;
  status: boolean;
  value: string;
  rows?: number;
}
export const FormTextArea: React.FC<IFormTextArea> = ({
  placeholder,
  handleChange,
  name,
  status,
  value,
  rows = 5,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      className={`form-input ${!status && "!border-red-500/50"}`}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

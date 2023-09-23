"use client";
import React, { useEffect, useState } from "react";

export const NoiseBgPattern: React.FC<{ className: string }> = ({
  className,
}) => {
  const style = className;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      className={style}
      opacity=".22"
    >
      <filter id="nnnoise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="19"></feTurbulence>
      </filter>

      <rect width="100%" height="100%" filter="url(#nnnoise-filter)"></rect>
    </svg>
  );
};

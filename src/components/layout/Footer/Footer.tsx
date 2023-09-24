import Link from "next/link";
import React from "react";
import { FooterNav } from "./FooterNav";
import { PageMetrics } from "./PageMetrics";

export const Footer = () => {
  return (
    <footer className="bg-transparent mt-auto py-[30px] border-[2px] border-base-300">
      <div className="container-wide flex justify-between items-center">
        <FooterNav />
        <PageMetrics />
      </div>
    </footer>
  );
};

import Link from "next/link";
import React from "react";
import { FooterNav } from "./FooterNav";
import { PageMetrics } from "./PageMetrics";
import { SocialIconsList } from "@/components/main/SocialIconsList/SocialIconsList";

export const Footer = () => {
  return (
    <footer className=" mt-auto py-[25px] border-[3px] border-base-300 bg-base-300/30  z-20">
      <div className="container-wide flex justify-between items-center">
        <FooterNav />
        <div>
          <SocialIconsList />
        </div>
        <PageMetrics />
      </div>
    </footer>
  );
};

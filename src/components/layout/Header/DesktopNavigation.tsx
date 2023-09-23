import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

export const DesktopNavigation = () => {
  return (
    <nav id="header-navigation" className="max-md:hidden">
      <ul className="flex gap-[16px]">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link._id}>
              <Link href={link.path} aria-label={link.ariaLabel}>
                {link.text}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

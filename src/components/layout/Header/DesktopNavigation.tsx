import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export const DesktopNavigation = () => {
  const path = usePathname();
  console.log(path);
  return (
    <nav id="header-navigation" className="max-md:hidden">
      <ul className="flex gap-[32px]">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link._id} className="relative">
              <Link
                href={link.path}
                aria-label={link.ariaLabel}
                className={`capitalize link-hover ${
                  path === link.path && "font-semibold"
                }`}
              >
                {link.text}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

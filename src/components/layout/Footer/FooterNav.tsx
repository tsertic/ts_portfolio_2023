import Link from "next/link";
import React from "react";

export const FooterNav = () => {
  return (
    <nav>
      <ul className="flex max-md:flex-col-reverse  md:items-center gap-[16px] md:gap-[50px]">
        <li className="flex flex-col text-nav gap-[8px]">
          <span className="font-bold ">© 2023</span>
          <Link href="/" aria-label="Tomislav Sertic" className="link-hover ">
            Tomislav Sertic
          </Link>
        </li>
        <li className="flex flex-col">
          <span className="font-bold ">Legal</span>
          <Link
            href="/privacy-policy"
            aria-label="Privacy Policy"
            className="link-hover "
          >
            Privacy Policy
          </Link>
        </li>
        <li className="flex flex-col">
          <span className="font-bold ">Contact</span>
          <a
            href="mailto:tsertic5@gmail.com"
            aria-label="tsertic5@gmail.com"
            className="link-hover "
          >
            tsertic5@gmail.com
          </a>
        </li>
      </ul>
    </nav>
  );
};

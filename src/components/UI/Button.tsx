import Link from "next/link";
import React from "react";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}
export const Button: React.FC<IButton> = ({ children, href, ariaLabel }) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="  uppercase text-[14px] leading-[100%] tracking-[5px] py-[13px] px-[40px] inline-block border-[1px] border-base-content hover:bg-primary hover:text-primary-content transition-universal"
    >
      {children}
    </Link>
  );
};

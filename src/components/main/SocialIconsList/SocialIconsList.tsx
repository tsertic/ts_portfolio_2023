import { Icons } from "@/components/UI/Icons";
import { SOCIAL_ICONS } from "@/constants";
import React from "react";
interface ISocialIconsList {
  mobileMenu?: boolean;
}
export const SocialIconsList: React.FC<ISocialIconsList> = ({
  mobileMenu = false,
}) => {
  return (
    <ul className={`flex gap-[16px] ${!mobileMenu && "max-md:flex-col "}  `}>
      {SOCIAL_ICONS.map((icon, i) => {
        return (
          <li
            key={icon._id}
            className={`${
              !mobileMenu
                ? i % 2 === 0
                  ? "mt-0 ml-[-10px] md:ml-0 md:mt-[-3px]"
                  : "mt-0 ml-[10px] md:ml-0 md:mt-[3px]"
                : i % 2 === 0
                ? "pt-[-3px]"
                : "pt-[13px]"
            }  `}
          >
            <a href={icon.path} aria-label={icon.ariaLabel}>
              <Icons
                className={`w-[24px]   ${
                  mobileMenu
                    ? "fill-neutral-content scale-125 mr-[10px]"
                    : "fill-base-content"
                } hover:fill-primary transition-universal`}
                iconName={icon.iconName}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

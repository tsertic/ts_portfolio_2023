import React from "react";
import { AriaDescText } from "./AriaDescText";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";
export const BrandLogo = () => {
  return (
    <Link
      href="/"
      aria-label="homepage"
      className="hover:text-primary transition-universal"
    >
      <AriaDescText>homepage</AriaDescText>
      <div aria-hidden={true} className="flex gap-[4px] items-center">
        <Image
          width={48}
          height={48}
          alt="Tomislav Sertic Avatar"
          src="/images/ts-avatar-transparent.png"
          loading="eager"
        />
        <div className="flex flex-wrap gap-[4px] max-md:mt-[8px]">
          <h3 className=" text-nav font-bold">Tomislav Sertic</h3>
          <Icons
            iconName="twitterCheck"
            className="w-[20px] h-[20px] fill-blue-500"
          />
        </div>
      </div>
    </Link>
  );
};

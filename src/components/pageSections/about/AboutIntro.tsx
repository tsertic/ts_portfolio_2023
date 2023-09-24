import React from "react";
import Image from "next/image";
export const AboutIntro = () => {
  return (
    <div>
      <div className="container-wide"></div>
      <div className="flex max-md:flex-col gap-[50px] relative">
        <div className="w-full max-md:px-[16px] md:w-[40vw] h-[400px] relative ">
          <div className="absolute top-[-40px] lg:top-[-100px] left-[20%] md:left-[15%] lg:left-[20%] lg:top-[-120px] xl:top-[-150px] w-[200px] h-[140px] lg:h-[200px] ">
            <p className="text-center text-bodyL pt-[10px] pl-[20px] absolute top-[-30px] left-[50px] w-[150px]">
              this guy
            </p>
            <Image
              src="/images/drawing-arrow.svg"
              fill={true}
              alt="arrow"
              aria-hidden="true"
              className=" h-full object-fill "
            />
          </div>
          <picture>
            <source media="(max-width:768px)" srcSet="/images/about-hero.jpg" />
            <source
              media="(min-width:1200px)"
              srcSet="/images/about-hero-big.jpg"
            />
            <Image
              src="/images/about-hero.jpg"
              width={730}
              height={676}
              alt="Tomislav Sertic with dog"
              className="w-full h-full object-cover  max-md:rounded-[10px] md:rounded-r-[10px]"
            />
          </picture>
        </div>
        <div className="w-full md:max-w-[40vw] flex flex-col justify-center gap-[16px] relative max-md:px-[16px] max-md:text-center">
          <p className="text-bodyLMobile md:text-bodyL">
            I&apos;m Tomislav Sertic, full-stack developer who leans more
            towards the artistry of front-end development,based in the charming
            city of Zagreb, Croatia
          </p>
          <p className="text-bodyLMobile md:text-bodyL">
            For the past 5 years, I&apos;ve been deeply entrenched in the realm
            of web technologies,
          </p>
          <p className="text-bodyLMobile md:text-bodyL">
            My primary focus is on designing engaging, accessible, and
            high-performing interfaces tailored to meet the needs of users
          </p>
        </div>
      </div>
    </div>
  );
};

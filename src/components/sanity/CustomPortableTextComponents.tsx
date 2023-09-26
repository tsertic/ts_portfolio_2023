import React from "react";
import Image from "next/image";
import { YtPreview } from "./../sanity/youtube";

export const CustomPortableTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="">{children}</h3>;
    },
    normal: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
    blockquote: ({ children }: any) => {
      return <blockquote className="">{children}</blockquote>;
    },
    cite: ({ children, value }: any) => {
      return <cite className="">{children}</cite>;
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="">{children}</ul>;
    },
  },
  types: {
    image: ({ value }: any) => {
      const imgDesc = value.imgDesc;
      return (
        <div className="">
          <Image
            alt={imgDesc ? imgDesc : "Decorative image related to article"}
            src={value}
            width={800}
            height={400}
          />
          {imgDesc && <p>{imgDesc}</p>}
        </div>
      );
    },
    youtube: ({ value }: any) => {
      const videoDesc = value.videoDesc;
      return (
        <div className="">
          <YtPreview url={value.url} />
          {videoDesc && <p>{videoDesc}</p>}
        </div>
      );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} className="" rel="noreferrer" target="_blank">
          {children}
        </a>
      );
    },
  },
};

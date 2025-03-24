import React from "react";
import Image from "next/image";
import { YtPreview } from "./../sanity/youtube";

export const CustomPortableTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-2xl font-semibold mb-4 mt-6">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-xl font-medium mb-3 mt-5">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-lg font-medium mb-3 mt-4">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h5 className="text-base font-medium mb-2 mt-4">{children}</h5>;
    },
    h6: ({ children }: any) => {
      return (
        <h6 className="text-sm font-medium mb-2 mt-3 uppercase tracking-wider">
          {children}
        </h6>
      );
    },
    normal: ({ children }: any) => {
      return (
        <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200 text-base font-normal max-w-prose">
          {children}
        </p>
      );
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="pl-4 border-l-4 border-gray-300 dark:border-gray-700 italic my-6 text-gray-700 dark:text-gray-300">
          {children}
        </blockquote>
      );
    },
    cite: ({ children, value }: any) => {
      return (
        <cite className="block text-sm text-gray-600 dark:text-gray-400 mt-2">
          {children}
        </cite>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>;
    },
  },
  types: {
    image: ({ value }: any) => {
      const imgDesc = value.imgDesc;
      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            alt={imgDesc ? imgDesc : "Decorative image related to article"}
            src={value}
            width={800}
            height={400}
            className="w-full object-cover"
          />
          {imgDesc && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
              {imgDesc}
            </p>
          )}
        </div>
      );
    },
    youtube: ({ value }: any) => {
      const videoDesc = value.videoDesc;
      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <div className="aspect-video">
            <YtPreview url={value.url} />
          </div>
          {videoDesc && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
              {videoDesc}
            </p>
          )}
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
        <a
          href={value.href}
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    },
  },
};

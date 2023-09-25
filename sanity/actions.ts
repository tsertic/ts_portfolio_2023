import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

export const getProjects = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type=='project']{
        title,_id,"video":previewVideo.asset->url,"image":mainImage.asset->url,slug,categories[]->{title},technologies[]->{title},repository,live,body
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};

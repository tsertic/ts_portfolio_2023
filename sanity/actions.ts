import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { IContactFormData, IProjectData } from "@/types/index.t";
import { error } from "console";

export const getProjects = async (): Promise<IProjectData[]> => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type=='project']{
        title,_id,"video":previewVideo.asset->url,"image":mainImage.asset->url,slug,categories[]->{title},technologies[]->{title},repository,live,body,priority
      } | order(priority desc)`,
      { next: { revalidate: 120 } }
    );
    return resources;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong fetching data");
  }
};

export const sendContactForm = async (
  formData: IContactFormData
): Promise<{ success: boolean; msg: string }> => {
  const { name, email, message } = formData;
  if (!name || !email || !message) {
    return { success: false, msg: "Fill out all fields" };
  }
  try {
    await writeClient.create({
      _type: "contact",
      name,
      email,
      message,
    });
    return {
      success: true,
      msg: "Message Sent. Thank you and I will respond as soon as possible.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      msg: "Something went wrong, please contact me over email.Thank you.",
    };
  }
};

import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import technology from "./schemas/technology";
import project from "./schemas/project";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, author, category, blockContent, technology],
};
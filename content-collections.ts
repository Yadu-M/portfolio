import { defineCollection, defineConfig } from "@content-collections/core";
 
const projects = defineCollection({
  name: "projects",
  directory: "src/projects",
  include: "**/*.md",
  schema: (z) => ({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    featured: z.boolean(),
    date: z.string()
  }),
});
 
export default defineConfig({
  collections: [projects],
});
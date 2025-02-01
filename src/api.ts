import { Frontmatter } from "./types";

export const getProjects = async () => {
  const projectModules = import.meta.glob("./content/projects/*.mdx", {
    import: "frontmatter",
  });

  // Map over the entries, creating an array of promises.
  const projects = await Promise.all(
    Object.entries(projectModules).map(async ([path, frontmatterPromise]) => {
      const slug =
        path
          .split("/")
          .pop()
          ?.replace(/\.mdx$/, "") || "";
      const frontMatter = (await frontmatterPromise()) as Frontmatter;

      return {
        slug,
        frontMatter,
      };
    }),
  );

  projects.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date).getTime();
    const dateB = new Date(b.frontMatter.date).getTime();
    return dateB - dateA;
  });

  return projects;
};

export const getProject = async () => {
  
}
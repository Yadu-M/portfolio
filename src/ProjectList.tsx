import { NavLink } from "react-router-dom";
import { Frontmatter } from "./types";

interface Project {
  slug: string;
  frontmatter: Frontmatter;
}

const getProjects = () => {
  const projectModules = import.meta.glob("./content/projects/*.mdx", {
    eager: true,
    import: "frontmatter",
  });

  const projects = Object.entries(projectModules).map(
    ([path, frontmatter]): Project => {
      const slug =
        path
          .split("/")
          .pop()
          ?.replace(/\.mdx$/, "") || "";

      return {
        slug,
        frontmatter: frontmatter as Frontmatter,
      };
    },
  );

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
};

const ProjectTile = ({ props }: { props: Frontmatter }) => {
  const { title, id, description } = props;
  return (
    <NavLink to={`/project/${id}`}>
      <div className="flex max-w-60 flex-shrink flex-col gap-3 rounded-md border border-[--bg-secondary] p-3 hover:bg-secondary">
        <h3>{title}</h3>
        <img
          src={`/images/${id}/thumbnail.png`}
          alt={`${id} thumbnail`}
          className="mx-auto h-60 w-80 rounded-md object-cover"
        ></img>
        <p className="font-mono">{description}</p>
      </div>
    </NavLink>
  );
};

export const ProjectList = () => {
  return (
    <section>
      <h2 className="">Projects</h2>
      <div className="mt-3 flex flex-wrap justify-center gap-10 md:justify-normal">
        {getProjects().map((project) => {
          if (project) {
            return (
              <ProjectTile props={project.frontmatter} key={project.slug} />
            );
          }
        })}
      </div>
    </section>
  );
};

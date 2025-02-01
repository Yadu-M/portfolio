import { NavLink } from "react-router-dom";
import { Frontmatter } from "./types";
import { useEffect, useState } from "react";
import { getProjects } from "./api";

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
  const [projects, setProjects] = useState<
    { slug: string; frontMatter: Frontmatter }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <section>
      <h2 className="">Projects</h2>
      <div className="mt-3 flex flex-wrap justify-center gap-10 md:justify-normal">
        {projects.map((project) => (
          <ProjectTile props={project.frontMatter} key={project.slug} />
        ))}
      </div>
    </section>
  );
};

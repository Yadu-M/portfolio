import { NavLink } from "react-router-dom";
import { allProjects } from "../.content-collections/generated/index";

type Props = {
  id: string;
  title: string;
  description: string;
};

const ProjectTile = ({ id, title, description }: Props) => {
  return (
    <NavLink to={`/project/${id}`}>
      <div className="flex max-w-60 flex-shrink flex-col gap-3 rounded-md border border-[--bg-secondary] p-3 hover:bg-secondary">
        <h3>{title}</h3>
        <img
          src={`/images/${id}/thumbnail.png`}
          alt={`${id} thumbnail`}
          className="mx-auto h-80 w-80 rounded-md object-cover"
        ></img>
        <p className="font-mono">{description}</p>
      </div>
    </NavLink>
  );
};

export const Projects = () => {
  return (
    <section>
      <h2 className="">Projects</h2>
      <div className="mt-3 flex flex-wrap gap-10 justify-center md:justify-normal">
        {allProjects.map((project) => (
          <ProjectTile
            id={project.id}
            description={project.description}
            title={project.title}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

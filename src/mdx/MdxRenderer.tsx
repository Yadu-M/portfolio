import { BsGithub, BsLink } from "react-icons/bs";
import { allProjects } from "../../.content-collections/generated/";
import { Mdx } from "../components/Mdx";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import "./mdx.css";

export function MdxRenderer() {
  const { id } = useParams();

  const project = allProjects.find((project) => project.id === id);
  const gitLink = project?.repository;
  const projectLink = project?.url;

  if (!project) {
    console.error("Project not found");
    return;
  }

  console.log(projectLink);

  return (
    <div className="select-text">
      <header className="flex gap-5">
        {gitLink && (
          <div className="flex items-center gap-2 pl-5 font-mono">
            GitHub Repo Link:
            <Link to={`https://github.com/${gitLink}`} target="_blank">
              <Button size={"icon"} variant={"outline"}>
                <BsGithub />
              </Button>
            </Link>
          </div>
        )}
        {projectLink && (
          <div className="flex items-center gap-2 pl-5 font-mono">
            Project Link:
            <Link to={projectLink} target="_blank">
              <Button size={"icon"} variant={"outline"}>
                <BsLink />
              </Button>
            </Link>
          </div>
        )}
      </header>
      <article className="prose prose-zinc prose-quoteless mx-auto my-5 px-4">
        <Mdx code={project.mdx} />
      </article>
    </div>
  );
}

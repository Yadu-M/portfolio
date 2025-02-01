import { useParams } from "react-router-dom";
import MDXContent from "@/components/MdxContent";

export const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <article className="prose max-w-none">
      <MDXContent content={`projects/${projectId}`} />
    </article>
  );
};

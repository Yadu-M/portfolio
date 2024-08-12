import { notFound } from "next/navigation";
import { allProjects } from "content-collections";
import { Mdx } from "../../../components/Mdx";
import { Header } from "./Header";
import "./mdx.css"

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  const id = params?.id;
  const project = allProjects.find((project) => project.id === id);
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen select-text">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.mdx} />
      </article>
    </div>
  );
}
// @ts-nocheck
import { lazy, Suspense, useEffect, useState } from "react";
import fs from "node:fs/promises";
import { Frontmatter } from "@/types";
import { getProjects } from "@/api";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function clsx(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={clsx(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={clsx(
        "mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={clsx(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={clsx(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={clsx(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={clsx(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, href, children, ...props }) => {
    // Check if the link is external. if so we use an 'a' tag.
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          className={clsx(
            "font-medium underline underline-offset-4",
            className,
          )}
          href={href}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        className={clsx("font-medium underline underline-offset-4", className)}
        to={href}
        {...props}
      >
        {children}
      </NavLink>
    );
  },
  p: ({ className, ...props }) => (
    <p
      className={clsx(
        "font-mono leading-7 [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={clsx("my-6 ml-6 list-disc font-mono", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={clsx("my-6 ml-6 list-decimal font-mono", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={clsx("mt-2 font-mono", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={clsx(
        "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className={clsx("rounded-md border border-zinc-200", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx(
        "m-0 border-t border-zinc-300 p-0 even:bg-secondary",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left font-mono [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={clsx(
        "mb-4 mt-6 overflow-x-auto rounded-lg",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

const mdxModules = import.meta.glob("../content/projects/*.mdx");

export const MdxLoader = ({ content }: { content: string }) => {
  const importCurrMdx = mdxModules[`../content/${content}.mdx`];
  const [frontMatter, setFrontMatter] = useState<Frontmatter | null>(null);
  if (!importCurrMdx) return <>Content Not Found</>;

  const Content = lazy(async () => {
    const mdx = importCurrMdx();
    setFrontMatter(await mdx.then((data) => data.frontmatter));
    return mdx;
  });

  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <div className="mb-10 font-mono flex flex-col">
        {frontMatter?.repository && (
          <Link
            to={`https://github.com/Yadu-M/${frontMatter?.repository}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-auto self-start"
          >
            Repo Link: {`https://github.com/Yadu-M/${frontMatter?.repository}`}
          </Link>
        )}
        {frontMatter?.url && (
          <Link
            to={`${frontMatter?.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-auto self-start"
          >
            Website Link: {`${frontMatter?.url}`}
          </Link>
        )}

      </div>
      <Content components={components} />
    </Suspense>
  );
};

export default MdxLoader;

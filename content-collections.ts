import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const projects = defineCollection({
  name: "projects",
  directory: "./public/content",
  include: "*.mdx",
  schema: (z) => ({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    featured: z.boolean(),
    date: z.string(),
    repository: z.string(),
    url: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            
            onVisitLine(node: { children: string | any[]; }) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            
            onVisitHighlightedLine(node: { properties: { className: string[]; }; }) {
              node.properties.className.push("line--highlighted");
            },
            
            onVisitHighlightedWord(node: { properties: { className: string[]; }; }) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [projects],
});
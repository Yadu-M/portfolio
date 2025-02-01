import { Frontmatter } from "./types";

declare module "*.mdx" {
  export const frontmatter: Frontmatter
  const Component: React.ComponentType;
  export default Component;
}

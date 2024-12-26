import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import contentCollections from "@content-collections/vite"

export default defineConfig({
  plugins: [
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    contentCollections(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

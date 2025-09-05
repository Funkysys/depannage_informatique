import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";
import cloudflarePages from "@astrojs/cloudflare-pages";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    }),
  ],
  output: "static", // static HTML output
  adapter: cloudflarePages(), // works on Cloudflare Pages
  devToolbar: {
    enabled: false,
  },
});

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
	site: "https://oriexe.github.io",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Azam",
			openGraph: {
				home: {
					title: "Azam's Portfolio",
					description: "This is my Game Development and technology portfolio ",
				},
				blog: {
					title: "Blog",
					description: "News and guides for Spectre.",
				},
				projects: {
					title: "Projects",
				},
			},
		}),
	],
	
});

export default config;

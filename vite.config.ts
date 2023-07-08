import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 2000,
		open: true
	},
	preview: {
		port: 4000,
		open: true
	},
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ["@urql/core"]
	}
});

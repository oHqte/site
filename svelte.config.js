import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";


const config =  {
	preprocess: [
		preprocess({
			sass: true
		})
	],

	kit: {
		adapter: adapter({
			runtime:"nodejs18.x",
		}),
		alias: {
			$components: "src/components",
			$styles: "src/styles"
		}
	}
};

export default config;
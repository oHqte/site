import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import DOMPurify from "isomorphic-dompurify";

export const md2HTML = async (markdown: string | undefined) => {
	const file = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeSlug)
		.use(rehypeStringify)
		.process(markdown ?? "");

	return DOMPurify.sanitize(String(await file));
};

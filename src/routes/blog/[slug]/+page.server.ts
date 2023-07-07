import { posts } from "$lib/server/database";
import { formatDate, md2HTML } from "$lib/server/helpers";

import type { postType } from "$lib/types";

export const load = async ({ params }) => {

	const post: postType = await posts.fetch({
		slug: params.slug,
		select: {
			tags: true,
			views: true,
			body: true
		}
	})

	if (post) {
		post.timestamp = formatDate(post.timestamp)
		post.body = await md2HTML(post.body)
	}

	return post
};

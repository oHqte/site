import { posts } from "$lib/server/database";
import { formatDate, md2HTML } from "$lib/server/utils";

import type { PostProps } from "$lib/types";

export const load = async ({ params }): Promise<PostProps> => {
	const post: PostProps = await posts.fetch({
		slug: params.slug,
		select: {
			tags: true,
			views: true,
			body: true
		}
	});
	await posts.update.views({ slug: params.slug })
	if (post) {
		post.timestamp = formatDate(post.timestamp);
		post.tags = (`${post.tags}`).split(",");
		post.body = await md2HTML(post.body);
	}
	console.log(`\npost/${post?.slug}\n`);
	console.log(post);


	return post;
};

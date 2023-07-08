import { prisma, prismaError } from "../client";

/**
 * @todo
 *  - frontend: update info from editing post
 *  - backend: update a row in `posts` table
 */
async function post() {
	return;
}

/**
 * increment __views__ for a post in database
 * - __slug__ : `/blog/[slug]`
 *
 * @example
 * await posts.update.views({
 * 		slug: "git-force-push"
 * })
 */
async function views({ slug }: { slug: string }) {
	try {
		await prisma.posts.update({
			where: {
				slug: slug
			},
			data: {
				views: {
					increment: 1
				}
			}
		});
	} catch (e) {
		if (e instanceof prismaError) {
			throw e;
		}
	}
}

export const update = {
	post: post,
	views: views
};

import { prisma, prismaSelect } from "../client";


interface listArgs {
	limit: number;
	select?: {
		slug?: boolean;
		title?: boolean;
		timestamp?: boolean;
		time2read?: boolean;
		tags?: boolean;
		views?: boolean;
		body?: boolean;
	};
}

/**
 * __list__ all posts from database of posts
 * - __limit__ : max number of posts to pull from database
 * - __select__ : columns to select from database
 *
 * @example
 * const res = await posts.list({
 *     limit: 4,
 *	   select: {}
 * })
 */
export async function list({ limit = 3, select }: listArgs) {

	const res = await prisma.posts.findMany({
		select: {
			...prismaSelect,
			...select
		},
		take: limit
	});
	return res;
}

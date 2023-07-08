import { prisma, prismaSelect, prismaError } from "../client";
import { error } from "@sveltejs/kit";

interface fetchArgs {
	slug: string;
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
 * __fetch__ post from database
 * - __slug__ : `/blog/[slug]`
 * - __select__ : columns to select from database

 * @example
 * const res = await posts.fetch({
 *     slug:"git-push-force",
 *	   select: {
 *		    body:true
 *	   }
 * })
 */
export async function fetch({ slug, select }: fetchArgs) {
	try {
		const res = await prisma.posts.findFirstOrThrow({
			select: {
				...prismaSelect,
				...select
			},
			where: {
				slug: slug
			}
		});
		return res;
	} catch (e) {
		// note: split instanceof & e.code if need arises
		if (e instanceof prismaError && e.code === "P2025") {
			throw error(404, "Not Found");
		}
	}
}

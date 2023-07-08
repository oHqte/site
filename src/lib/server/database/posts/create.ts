import { prisma,prismaError } from "../client";

interface createArgs {
	slug: string;
	title?: string;
	timestamp?: string | Date;
	time2read?: number;
	tags?: string[];
	views?: number;
	body?: string;
}


/**
 * __create__ new post in database
 * - __slug__ : `/blog/[slug]`
 * - __title__ : title of new post
 * - __timestamp__ : timestamp that the new post was created on
 * - __time2read__ : approx time to read the new post
 * - __tags__ : labels for the new post for SEO
 * - __views__ : number of views on the new post
 * - __body__ : content of new post
 *
 * @example
 * await posts.create({
 * 		slug:"yourSlug",
 * 		title:"yourTitle",
 * 		time2read:2,
 * 		tags: ["tag1","tag2"],
 * 		views: 0,
 * 		body: "# Hello World!"
 * })
 */
export async function create({
	slug,
	title = "",
	timestamp = new Date().toISOString(),
	time2read = 1,
	tags = [""],
	views = 0,
	body = ""
}: createArgs): Promise<void> {
	try {
		await prisma.posts.create({
			data: {
				slug: slug,
				title: title,
				timestamp: timestamp,
				time2read: time2read,
				tags: tags,
				views: views,
				body: body
			}
		});
	} catch (e) {
		if (e instanceof prismaError) {
			if (e.code == "P2002") {
				console.error("unique constraint violation: use a different slug");
			}
		}
		throw e;
	}
}

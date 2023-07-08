import { prisma, prismaError } from "../client";


/**
 * __remove__ a post the database
 * - __slug__ : `/blog/[slug]`
 *
 * @example
 * await posts.remove({
 * 		slug:"git-push-force"
 * })
 */
export async function remove({ slug }: { slug: string }):Promise<void> {
	try {
		await prisma.posts.delete({
			where: {
				slug: slug
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

import { prisma } from "../client"

type fetchArgs = { slug: string, select?: { slug?: boolean, title?: boolean, timestamp?: boolean, time2read?: boolean, tags?: boolean, views?: boolean, body?: boolean } }
export async function fetch({ slug, select = { slug: true, title: true, timestamp: true, time2read: true, tags: false, views: false, body: false } }: fetchArgs) {
    const res = await prisma.posts.findFirst({
        select: {
            slug: select.slug,
            title: select.title,
            timestamp: select.timestamp,
            time2read: select.time2read,
            tags: select.tags,
            views: select.views,
            body: select.body
        },
        where: {
            slug: slug
        }
    })

    return res;
}

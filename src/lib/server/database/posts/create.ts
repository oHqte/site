import { prisma, PrismaError } from "../client"


interface createArgs {
    slug: string;
    title?: string;
    timestamp?: string | Date;
    time2read?: number;
    tags?: string[];
    views?: number;
    body?: string;
}


export async function create({ slug, title = "", timestamp = new Date().toISOString(), time2read = 1, tags = [""], views = 0, body = "" }: createArgs) {
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
        })
    } catch (e) {
        if (e instanceof PrismaError) {
            if (e.code == "P2002") {
                console.error("unique constraint violation: use a different slug")
            }
        }
        throw e
    }

}

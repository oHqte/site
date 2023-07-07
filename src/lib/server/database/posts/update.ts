import { prisma, PrismaError } from "../client"


/**
 * @todo
 *  - frontend: update info from editing post
 *  - backend: update a row in `posts` table
 */
async function post() {
    // TODO
}

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
        })
    } catch (e) {
        if (e instanceof PrismaError) {
            throw e
        }
    }
}


export const update = {
    // post: post
    views: views
}

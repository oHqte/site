import { prisma, PrismaError } from "../client"

export async function remove({ slug }: { slug: string }) {
    try {
        await prisma.posts.delete({
            where: {
                slug: slug
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


import {prisma} from "../client"

export async function list({limit=3}:{limit?:number}){
    const res = await prisma.posts.findMany({
        take:limit
    })
    return res
}
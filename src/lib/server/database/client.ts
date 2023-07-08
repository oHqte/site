import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const prismaError = Prisma.PrismaClientKnownRequestError;
const prismaSelect: { [key: string]: boolean } = {
    slug: true,
    title: true,
    timestamp: true,
    time2read: true,
    tags: false,
    views: false,
    body: false
}

export { prisma, prismaError, prismaSelect };
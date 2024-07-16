// utils/db.ts
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export const findUserByUsername = async (username: string) => {
    return await prisma.user.findUnique({
        where: { username },
    });
};

export const createUser = async (username: string, password: string) => {
    return await prisma.user.create({
        data: { username, password },
    });
};

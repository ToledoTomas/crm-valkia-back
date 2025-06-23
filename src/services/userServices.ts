import { prisma } from '../config/prisma';
import { User } from '@prisma/client';

export const getUser = async (email: string): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
};

export const createUser = async (user: User): Promise<User> => {
    return await prisma.user.create({
        data: user,
    });
};

export const deleteUser = async (id: number): Promise<User> => {
    return await prisma.user.delete({
        where: {
            id,
        },
    });
};
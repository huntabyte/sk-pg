import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

const prisma = global.__prisma__ || new PrismaClient();

if (dev) {
	global.__prisma__ = prisma;
}

export { prisma };

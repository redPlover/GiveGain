import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
    errorFormat: 'pretty',
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

export default { prisma };

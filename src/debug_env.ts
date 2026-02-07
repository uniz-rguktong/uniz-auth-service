
import dotenv from 'dotenv';
dotenv.config();

console.log('DEBUG: DATABASE_URL loaded:', process.env.DATABASE_URL);

import { PrismaClient } from './generated/client';
const prisma = new PrismaClient();
// @ts-ignore
console.log('DEBUG: Prisma Datasource:', prisma._engineConfig?.datasources?.[0]?.url?.value || 'Hidden');

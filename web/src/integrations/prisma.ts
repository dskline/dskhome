import { PrismaClient } from "@prisma/client";
export type { Prisma } from "@prisma/client";

let prisma = new PrismaClient();

export default prisma;

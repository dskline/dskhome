import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export type PrismaModels = {
  [M in Prisma.ModelName]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findUnique"]>>,
    null
  >;
};

const prisma = new PrismaClient();

export default prisma;

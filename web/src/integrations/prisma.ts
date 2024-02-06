import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export type PrismaModels = {
  [M in Prisma.ModelName]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findUnique"]>>,
    null
  >;
};

// ensure only one instance of PrismaClient is created in dev (hot reload fix)
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

export default prisma;

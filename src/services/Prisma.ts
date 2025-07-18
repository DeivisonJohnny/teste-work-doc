import * as PrismaTypes from "@prisma/client";

const Prisma: PrismaTypes.PrismaClient = new PrismaTypes.PrismaClient();

export { PrismaTypes };
export default Prisma;

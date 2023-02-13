import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return prisma.message.findMany({
    where: {
      listingId: parseInt(event.context.params.listingId),
    },
  });
});

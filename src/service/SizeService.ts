import { Prisma, PrismaClient, Size } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class SizeService extends BaseService<
  Size,
  Prisma.SizeCreateInput,
  Prisma.SizeUpdateInput
> {
  constructor() {
    super(prismaClient.size);
  }
}

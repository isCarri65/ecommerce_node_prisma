import { Prisma, PrismaClient, Type } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class TypeService extends BaseService<
  Type,
  Prisma.TypeCreateInput,
  Prisma.TypeUpdateInput
> {
  constructor() {
    super(prismaClient.type);
  }
}

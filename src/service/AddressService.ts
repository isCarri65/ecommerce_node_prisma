import { Address, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class AddressService extends BaseService<
  Address,
  Prisma.AddressCreateInput,
  Prisma.AddressUpdateInput
> {
  constructor() {
    super(prismaClient.address);
  }
}

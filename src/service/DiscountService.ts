import { Discount, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";
const prismaClient = new PrismaClient();
export class DiscountService extends BaseService<
  Discount,
  Prisma.DiscountCreateInput,
  Prisma.DiscountUpdateInput
> {
  constructor() {
    super(prismaClient.discount);
  }
}

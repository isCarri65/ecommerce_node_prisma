import { Prisma, PrismaClient, ProductDiscount } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class ProductDiscountService extends BaseService<
  ProductDiscount,
  Prisma.ProductDiscountCreateInput,
  Prisma.ProductDiscountUpdateInput
> {
  constructor() {
    super(prismaClient.productDiscount);
  }
}

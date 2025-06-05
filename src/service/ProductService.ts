import { Prisma, PrismaClient, Product } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class ProductService extends BaseService<
  Product,
  Prisma.ProductCreateInput,
  Prisma.ProductUpdateInput
> {
  constructor() {
    super(prismaClient.product);
  }
}

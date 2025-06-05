import { Prisma, PrismaClient, ProductVariant } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class ProductVariantService extends BaseService<
  ProductVariant,
  Prisma.ProductVariantCreateInput,
  Prisma.ProductVariantUpdateInput
> {
  constructor() {
    super(prismaClient.productVariant);
  }
}

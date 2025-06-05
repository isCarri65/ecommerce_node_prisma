import { BaseController } from "./BaseController";
import { ProductVariant, Prisma, PrismaClient } from "@prisma/client";
import { ProductVariantService } from "../service/ProductVariantService";
const prismaClient = new PrismaClient();
const productVariantService = new ProductVariantService();
export class ProductVariantController extends BaseController<
  ProductVariant,
  ProductVariantService,
  Prisma.ProductVariantCreateInput,
  Prisma.ProductVariantUpdateInput
> {
  constructor() {
    super(productVariantService);
  }
}

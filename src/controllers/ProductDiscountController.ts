import { BaseController } from "./BaseController";
import { ProductDiscount, Prisma, PrismaClient } from "@prisma/client";
import { ProductDiscountService } from "../service/ProductDiscountService";
const prismaClient = new PrismaClient();
const productDiscountService = new ProductDiscountService();
export class ProductDiscountController extends BaseController<
  ProductDiscount,
  ProductDiscountService,
  Prisma.ProductDiscountCreateInput,
  Prisma.ProductDiscountUpdateInput
> {
  constructor() {
    super(productDiscountService);
  }
}

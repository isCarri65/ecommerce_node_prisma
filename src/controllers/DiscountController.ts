import { BaseController } from "./BaseController";
import { Discount, Prisma, PrismaClient } from "@prisma/client";
import { DiscountService } from "../service/DiscountService";
const prismaClient = new PrismaClient();
const discountService = new DiscountService();
export class DiscountController extends BaseController<
  Discount,
  DiscountService,
  Prisma.DiscountCreateInput,
  Prisma.DiscountUpdateInput
> {
  constructor() {
    super(discountService);
  }
}

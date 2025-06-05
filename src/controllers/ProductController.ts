import { BaseController } from "./BaseController";
import { Product, Prisma, PrismaClient } from "@prisma/client";
import { ProductService } from "../service/ProductService";
const prismaClient = new PrismaClient();
const productService = new ProductService();
export class ProductController extends BaseController<
  Product,
  ProductService,
  Prisma.ProductCreateInput,
  Prisma.ProductUpdateInput
> {
  constructor() {
    super(productService);
  }
}

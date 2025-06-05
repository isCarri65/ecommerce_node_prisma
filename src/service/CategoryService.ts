import { Category, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class CategoryService extends BaseService<
  Category,
  Prisma.CategoryCreateInput,
  Prisma.CategoryUpdateInput
> {
  constructor() {
    super(prismaClient.category);
  }
}

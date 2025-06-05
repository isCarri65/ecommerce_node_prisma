import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { Category, Prisma, PrismaClient } from "@prisma/client";
import { CategoryService } from "../service/CategoryService";
const prismaClient = new PrismaClient();
const categoryService = new CategoryService();
export class CategoryController extends BaseController<
  Category,
  CategoryService,
  Prisma.CategoryCreateInput,
  Prisma.CategoryUpdateInput
> {
  constructor() {
    super(categoryService);
  }
}

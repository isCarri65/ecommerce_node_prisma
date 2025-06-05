import { BaseController } from "./BaseController";
import { Type, Prisma, PrismaClient } from "@prisma/client";
import { TypeService } from "../service/TypeService";
const prismaClient = new PrismaClient();
const typeService = new TypeService();
export class TypeController extends BaseController<
  Type,
  TypeService,
  Prisma.TypeCreateInput,
  Prisma.TypeUpdateInput
> {
  constructor() {
    super(typeService);
  }
}

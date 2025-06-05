import { BaseController } from "./BaseController";
import { Size, Prisma, PrismaClient } from "@prisma/client";
import { SizeService } from "../service/SizeService";
const prismaClient = new PrismaClient();
const sizeService = new SizeService();
export class SizeController extends BaseController<
  Size,
  SizeService,
  Prisma.SizeCreateInput,
  Prisma.SizeUpdateInput
> {
  constructor() {
    super(sizeService);
  }
}

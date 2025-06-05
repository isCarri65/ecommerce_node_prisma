import { Color, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class ColorService extends BaseService<
  Color,
  Prisma.ColorCreateInput,
  Prisma.ColorUpdateInput
> {
  constructor() {
    super(prismaClient.color);
  }
}

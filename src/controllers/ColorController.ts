import { BaseController } from "./BaseController";
import { Color, Prisma, PrismaClient } from "@prisma/client";
import { ColorService } from "../service/ColorService";
const prismaClient = new PrismaClient();
const colorService = new ColorService();
export class ColorController extends BaseController<
  Color,
  ColorService,
  Prisma.ColorCreateInput,
  Prisma.ColorUpdateInput
> {
  constructor() {
    super(colorService);
  }
}

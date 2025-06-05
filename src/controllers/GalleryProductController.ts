import { BaseController } from "./BaseController";
import { GalleryProduct, Prisma, PrismaClient } from "@prisma/client";
import { GalleryProductService } from "../service/GalleryProductService";
const prismaClient = new PrismaClient();
const galleryProductService = new GalleryProductService();
export class GalleryProductController extends BaseController<
  GalleryProduct,
  GalleryProductService,
  Prisma.GalleryProductCreateInput,
  Prisma.GalleryProductUpdateInput
> {
  constructor() {
    super(galleryProductService);
  }
}

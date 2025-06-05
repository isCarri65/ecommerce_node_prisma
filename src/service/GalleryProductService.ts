import { GalleryProduct, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class GalleryProductService extends BaseService<
  GalleryProduct,
  Prisma.GalleryProductCreateInput,
  Prisma.GalleryProductUpdateInput
> {
  constructor() {
    super(prismaClient.galleryProduct);
  }
}

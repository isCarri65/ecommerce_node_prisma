import { Gallery, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class GalleryService extends BaseService<
  Gallery,
  Prisma.GalleryCreateInput,
  Prisma.GalleryUpdateInput
> {
  constructor() {
    super(prismaClient.gallery);
  }
}

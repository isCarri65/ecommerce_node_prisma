import { BaseController } from "./BaseController";
import { Gallery, Prisma, PrismaClient } from "@prisma/client";
import { GalleryService } from "../service/GalleryService";
const prismaClient = new PrismaClient();
const galleryService = new GalleryService();
export class GalleryController extends BaseController<
  Gallery,
  GalleryService,
  Prisma.GalleryCreateInput,
  Prisma.GalleryUpdateInput
> {
  constructor() {
    super(galleryService);
  }
}

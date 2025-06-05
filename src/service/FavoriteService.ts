import { Favorite, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();
export class FavoriteService extends BaseService<
  Favorite,
  Prisma.FavoriteCreateInput,
  Prisma.FavoriteUpdateInput
> {
  constructor() {
    super(prismaClient.favorite);
  }
}

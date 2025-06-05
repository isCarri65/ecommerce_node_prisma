import { BaseController } from "./BaseController";
import { Favorite, Prisma, PrismaClient } from "@prisma/client";
import { FavoriteService } from "../service/FavoriteService";
const prismaClient = new PrismaClient();
const favoriteService = new FavoriteService();
export class FavoriteController extends BaseController<
  Favorite,
  FavoriteService,
  Prisma.FavoriteCreateInput,
  Prisma.FavoriteUpdateInput
> {
  constructor() {
    super(favoriteService);
  }
}

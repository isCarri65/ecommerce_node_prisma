import { BaseController } from "./BaseController";
import { User, Prisma, PrismaClient } from "@prisma/client";
import { UserService } from "../service/UserService";
const prismaClient = new PrismaClient();
const userService = new UserService();
export class UserController extends BaseController<
  User,
  UserService,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput
> {
  constructor() {
    super(userService);
  }
}

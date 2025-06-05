import { Prisma, PrismaClient, User } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class UserService extends BaseService<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput
> {
  constructor() {
    super(prismaClient.user);
  }
}

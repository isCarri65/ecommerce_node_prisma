import { Prisma, PrismaClient, Role, User } from "@prisma/client";
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

  public findUserByEmail = async (email: string) => {
    return prismaClient.user.findUnique({ where: { email } });
  };

  public createUser = async (
    email: string,
    hashedPassword: string,
    name: string,
    role: Role
  ) => {
    return prismaClient.user.create({
      data: { email, password: hashedPassword, name, role },
    });
  };
}

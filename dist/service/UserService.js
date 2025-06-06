"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const BaseService_1 = require("./BaseService");
const prismaClient = new client_1.PrismaClient();
class UserService extends BaseService_1.BaseService {
    constructor() {
        super(prismaClient.user);
        this.findUserByEmail = async (email) => {
            return prismaClient.user.findUnique({ where: { email } });
        };
        this.createUser = async (email, hashedPassword, name, role) => {
            return prismaClient.user.create({
                data: { email, password: hashedPassword, name, role },
            });
        };
    }
}
exports.UserService = UserService;

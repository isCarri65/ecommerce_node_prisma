"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const UserService_1 = require("../service/UserService");
const prismaClient = new client_1.PrismaClient();
const userService = new UserService_1.UserService();
class UserController extends BaseController_1.BaseController {
    constructor() {
        super(userService);
    }
}
exports.UserController = UserController;

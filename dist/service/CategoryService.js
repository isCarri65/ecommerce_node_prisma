"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const client_1 = require("@prisma/client");
const BaseService_1 = require("./BaseService");
const prismaClient = new client_1.PrismaClient();
class CategoryService extends BaseService_1.BaseService {
    constructor() {
        super(prismaClient.category);
    }
}
exports.CategoryService = CategoryService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const CategoryService_1 = require("../service/CategoryService");
const prismaClient = new client_1.PrismaClient();
const categoryService = new CategoryService_1.CategoryService();
class CategoryController extends BaseController_1.BaseController {
    constructor() {
        super(categoryService);
    }
}
exports.CategoryController = CategoryController;

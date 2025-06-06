"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const ProductService_1 = require("../service/ProductService");
const prismaClient = new client_1.PrismaClient();
const productService = new ProductService_1.ProductService();
class ProductController extends BaseController_1.BaseController {
    constructor() {
        super(productService);
    }
}
exports.ProductController = ProductController;

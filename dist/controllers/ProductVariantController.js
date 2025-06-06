"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const ProductVariantService_1 = require("../service/ProductVariantService");
const prismaClient = new client_1.PrismaClient();
const productVariantService = new ProductVariantService_1.ProductVariantService();
class ProductVariantController extends BaseController_1.BaseController {
    constructor() {
        super(productVariantService);
    }
}
exports.ProductVariantController = ProductVariantController;

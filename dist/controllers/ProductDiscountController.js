"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDiscountController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const ProductDiscountService_1 = require("../service/ProductDiscountService");
const prismaClient = new client_1.PrismaClient();
const productDiscountService = new ProductDiscountService_1.ProductDiscountService();
class ProductDiscountController extends BaseController_1.BaseController {
    constructor() {
        super(productDiscountService);
    }
}
exports.ProductDiscountController = ProductDiscountController;

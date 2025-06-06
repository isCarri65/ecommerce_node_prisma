"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const DiscountService_1 = require("../service/DiscountService");
const prismaClient = new client_1.PrismaClient();
const discountService = new DiscountService_1.DiscountService();
class DiscountController extends BaseController_1.BaseController {
    constructor() {
        super(discountService);
    }
}
exports.DiscountController = DiscountController;

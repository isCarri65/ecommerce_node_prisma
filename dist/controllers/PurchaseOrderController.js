"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const PurchaseOrderService_1 = require("../service/PurchaseOrderService");
const prismaClient = new client_1.PrismaClient();
const purchaseOrderService = new PurchaseOrderService_1.PurchaseOrderService();
class PurchaseOrderController extends BaseController_1.BaseController {
    constructor() {
        super(purchaseOrderService);
    }
}
exports.PurchaseOrderController = PurchaseOrderController;

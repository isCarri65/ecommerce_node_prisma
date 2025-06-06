"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderDetailController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const PurchaseOrderDetailService_1 = require("../service/PurchaseOrderDetailService");
const prismaClient = new client_1.PrismaClient();
const purchaseOrderDetailService = new PurchaseOrderDetailService_1.PurchaseOrderDetailService();
class PurchaseOrderDetailController extends BaseController_1.BaseController {
    constructor() {
        super(purchaseOrderDetailService);
    }
}
exports.PurchaseOrderDetailController = PurchaseOrderDetailController;

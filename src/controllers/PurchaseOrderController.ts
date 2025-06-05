import { BaseController } from "./BaseController";
import { PurchaseOrder, Prisma, PrismaClient } from "@prisma/client";
import { PurchaseOrderService } from "../service/PurchaseOrderService";
const prismaClient = new PrismaClient();
const purchaseOrderService = new PurchaseOrderService();
export class PurchaseOrderController extends BaseController<
  PurchaseOrder,
  PurchaseOrderService,
  Prisma.PurchaseOrderCreateInput,
  Prisma.PurchaseOrderUpdateInput
> {
  constructor() {
    super(purchaseOrderService);
  }
}

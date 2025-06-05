import { BaseController } from "./BaseController";
import { PurchaseOrderDetail, Prisma, PrismaClient } from "@prisma/client";
import { PurchaseOrderDetailService } from "../service/PurchaseOrderDetailService";
const prismaClient = new PrismaClient();
const purchaseOrderDetailService = new PurchaseOrderDetailService();
export class PurchaseOrderDetailController extends BaseController<
  PurchaseOrderDetail,
  PurchaseOrderDetailService,
  Prisma.PurchaseOrderDetailCreateInput,
  Prisma.PurchaseOrderDetailUpdateInput
> {
  constructor() {
    super(purchaseOrderDetailService);
  }
}

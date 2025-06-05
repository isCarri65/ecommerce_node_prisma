import { Prisma, PrismaClient, PurchaseOrder } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class PurchaseOrderService extends BaseService<
  PurchaseOrder,
  Prisma.PurchaseOrderCreateInput,
  Prisma.PurchaseOrderUpdateInput
> {
  constructor() {
    super(prismaClient.purchaseOrder);
  }
}

import { Prisma, PrismaClient, PurchaseOrderDetail } from "@prisma/client";
import { BaseService } from "./BaseService";

const prismaClient = new PrismaClient();

export class PurchaseOrderDetailService extends BaseService<
  PurchaseOrderDetail,
  Prisma.PurchaseOrderDetailCreateInput,
  Prisma.PurchaseOrderDetailUpdateInput
> {
  constructor() {
    super(prismaClient.purchaseOrderDetail);
  }
}

import { BaseController } from "./BaseController";
import { Address, Prisma, PrismaClient } from "@prisma/client";
import { AddressService } from "../service/AddressService";
const prismaClient = new PrismaClient();
const addressService = new AddressService();
export class AddressController extends BaseController<
  Address,
  AddressService,
  Prisma.AddressCreateInput,
  Prisma.AddressUpdateInput
> {
  constructor() {
    super(addressService);
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const AddressService_1 = require("../service/AddressService");
const prismaClient = new client_1.PrismaClient();
const addressService = new AddressService_1.AddressService();
class AddressController extends BaseController_1.BaseController {
    constructor() {
        super(addressService);
    }
}
exports.AddressController = AddressController;

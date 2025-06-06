"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const SizeService_1 = require("../service/SizeService");
const prismaClient = new client_1.PrismaClient();
const sizeService = new SizeService_1.SizeService();
class SizeController extends BaseController_1.BaseController {
    constructor() {
        super(sizeService);
    }
}
exports.SizeController = SizeController;

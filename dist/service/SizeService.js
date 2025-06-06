"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeService = void 0;
const client_1 = require("@prisma/client");
const BaseService_1 = require("./BaseService");
const prismaClient = new client_1.PrismaClient();
class SizeService extends BaseService_1.BaseService {
    constructor() {
        super(prismaClient.size);
    }
}
exports.SizeService = SizeService;

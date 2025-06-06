"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const TypeService_1 = require("../service/TypeService");
const prismaClient = new client_1.PrismaClient();
const typeService = new TypeService_1.TypeService();
class TypeController extends BaseController_1.BaseController {
    constructor() {
        super(typeService);
    }
}
exports.TypeController = TypeController;

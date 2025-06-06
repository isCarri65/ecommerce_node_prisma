"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const ColorService_1 = require("../service/ColorService");
const prismaClient = new client_1.PrismaClient();
const colorService = new ColorService_1.ColorService();
class ColorController extends BaseController_1.BaseController {
    constructor() {
        super(colorService);
    }
}
exports.ColorController = ColorController;

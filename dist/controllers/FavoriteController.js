"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const FavoriteService_1 = require("../service/FavoriteService");
const prismaClient = new client_1.PrismaClient();
const favoriteService = new FavoriteService_1.FavoriteService();
class FavoriteController extends BaseController_1.BaseController {
    constructor() {
        super(favoriteService);
    }
}
exports.FavoriteController = FavoriteController;

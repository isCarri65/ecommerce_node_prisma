"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const GalleryService_1 = require("../service/GalleryService");
const prismaClient = new client_1.PrismaClient();
const galleryService = new GalleryService_1.GalleryService();
class GalleryController extends BaseController_1.BaseController {
    constructor() {
        super(galleryService);
    }
}
exports.GalleryController = GalleryController;

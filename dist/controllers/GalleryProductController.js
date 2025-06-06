"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryProductController = void 0;
const BaseController_1 = require("./BaseController");
const client_1 = require("@prisma/client");
const GalleryProductService_1 = require("../service/GalleryProductService");
const prismaClient = new client_1.PrismaClient();
const galleryProductService = new GalleryProductService_1.GalleryProductService();
class GalleryProductController extends BaseController_1.BaseController {
    constructor() {
        super(galleryProductService);
    }
}
exports.GalleryProductController = GalleryProductController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryProductService = void 0;
const client_1 = require("@prisma/client");
const BaseService_1 = require("./BaseService");
const prismaClient = new client_1.PrismaClient();
class GalleryProductService extends BaseService_1.BaseService {
    constructor() {
        super(prismaClient.galleryProduct);
    }
}
exports.GalleryProductService = GalleryProductService;

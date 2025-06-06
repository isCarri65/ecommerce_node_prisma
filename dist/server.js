"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const errorHandler_1 = require("./middlewares/errorHandler");
const UserRoute_1 = __importDefault(require("./routes/admin/UserRoute"));
const UserRoute_2 = __importDefault(require("./routes/user/UserRoute"));
const client_1 = require("@prisma/client");
const CategoryRoute_1 = __importDefault(require("./routes/public/CategoryRoute"));
const ProductRoute_1 = __importDefault(require("./routes/ProductRoute"));
const AddressRoute_1 = __importDefault(require("./routes/user/AddressRoute"));
const DiscountRoute_1 = __importDefault(require("./routes/DiscountRoute"));
const FavoriteRoute_1 = __importDefault(require("./routes/FavoriteRoute"));
const GalleryProductRoute_1 = __importDefault(require("./routes/GalleryProductRoute"));
const GalleryRoute_1 = __importDefault(require("./routes/GalleryRoute"));
const ProductVariantRoute_1 = __importDefault(require("./routes/ProductVariantRoute"));
const ProductDiscountRoute_1 = __importDefault(require("./routes/ProductDiscountRoute"));
const PurchaseOrderRoute_1 = __importDefault(require("./routes/PurchaseOrderRoute"));
const PurchaseOrderDetailRoute_1 = __importDefault(require("./routes/PurchaseOrderDetailRoute"));
const SizeRoute_1 = __importDefault(require("./routes/public/SizeRoute"));
const TypeRoute_1 = __importDefault(require("./routes/public/TypeRoute"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const requireAdmin_1 = require("./middlewares/requireAdmin");
const createServer = (options) => {
    const prisma = new client_1.PrismaClient();
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    //public routes
    app.use("/categories", CategoryRoute_1.default);
    app.use("/products", ProductRoute_1.default);
    app.use("/addresses", AddressRoute_1.default);
    app.use("/discounts", DiscountRoute_1.default);
    app.use("/favorites", FavoriteRoute_1.default);
    app.use("/galleryProducts", GalleryProductRoute_1.default);
    app.use("/galleries", GalleryRoute_1.default);
    app.use("/productDiscounts", ProductDiscountRoute_1.default);
    app.use("/productVariants", ProductVariantRoute_1.default);
    app.use("/purchaseOrders", PurchaseOrderRoute_1.default);
    app.use("/purchaseOrderDetails", PurchaseOrderDetailRoute_1.default);
    app.use("/sizes", SizeRoute_1.default);
    app.use("/types", TypeRoute_1.default);
    //user routes
    app.use("/user/users", UserRoute_2.default);
    //admin routes
    app.use("/admin/users", auth_middleware_1.authenticate, requireAdmin_1.requireAdmin, UserRoute_1.default);
    app.use("/api/auth", authRoute_1.default);
    app.use(errorHandler_1.errorHandler);
    app.listen(options.port, () => {
        console.log(`server levantado en el puerto: ${options.port}`);
    });
};
exports.createServer = createServer;
//npx prisma generate
//npx prisma migrate dev --name init

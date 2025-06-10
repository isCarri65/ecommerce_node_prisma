import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler";
import "./types/express";
import { authenticate } from "./middlewares/auth.middleware";
import { requireAdmin } from "./middlewares/requireAdmin";
import validateUserId from "./middlewares/validateUserId";
import { PrismaClient } from "@prisma/client";

import publicAuthRoutes from "./routes/public/authRoute";
import publicCategoryRoute from "./routes/public/CategoryRoute";
import publicProductRoute from "./routes/public/ProductRoute";
import publicDiscountRoute from "./routes/public/DiscountRoute";
import publicFavoriteRoute from "./routes/public/FavoriteRoute";
import publicGalleryProductRoute from "./routes/public/GalleryProductRoute";
import publicGalleryRoute from "./routes/public/GalleryRoute";
import publicProductDiscountRoute from "./routes/public/ProductDiscountRoute";
import publicProductVariantRoute from "./routes/public/ProductVariantRoute";
import publicSizeRoute from "./routes/public/SizeRoute";
import publicTypeRoute from "./routes/public/TypeRoute";

import protectedAddressRoute from "./routes/protected/AddressRoute";
import userRoute from "./routes/protected/UserRoute";
import purchaseOrderRoute from "./routes/protected/PurchaseOrderRoute";
import purchaseOrderDetailRoute from "./routes/protected/PurchaseOrderDetailRoute";

import adminUserRoute from "./routes/admin/UserRoute";
import adiminCategoryRoute from "./routes/admin/CategoryRoute";
import adminProductRoute from "./routes/admin/ProductRoute";
import adminAddressRoute from "./routes/admin/AddressRoute";
import adminDiscountRoute from "./routes/admin/DiscountRoute";
import adminFavoriteRoute from "./routes/admin/FavoriteRoute";
import adminGalleryProductRoute from "./routes/admin/GalleryProductRoute";
import adminGalleryRoute from "./routes/admin/GalleryRoute";
import adminProductDiscountRoute from "./routes/admin/ProductDiscountRoute";
import adminProductVariantRoute from "./routes/admin/ProductVariantRoute";
import adminPurchaseOrderRoute from "./routes/admin/PurchaseOrderRoute";
import adminPurchaseOrderDetailRoute from "./routes/admin/PurchaseOrderDetailRoute";
import adminSizeRoute from "./routes/admin/SizeRoute";
import adminTypeRoute from "./routes/admin/TypeRoute";

export const createServer = (options: any) => {
  const prisma = new PrismaClient();
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  //public routes
  app.use("/api/public/auth", publicAuthRoutes);
  app.use("/api/public/categories", publicCategoryRoute);
  app.use("/api/public/products", publicProductRoute);
  app.use("/api/public/discounts", publicDiscountRoute);
  app.use("/api/public/favorites", publicFavoriteRoute);
  app.use("/api/public/galleryProducts", publicGalleryProductRoute);
  app.use("/api/public/galleries", publicGalleryRoute);
  app.use("/api/public/productDiscounts", publicProductDiscountRoute);
  app.use("/api/public/productVariants", publicProductVariantRoute);
  app.use("/api/public/sizes", publicSizeRoute);
  app.use("/api/public/types", publicTypeRoute);
  //protected routes
  app.use(
    "/api/protected/addresses",
    authenticate,
    validateUserId,
    protectedAddressRoute
  );
  app.use("/api/protected/users", authenticate, validateUserId, userRoute);
  app.use(
    "/api/protected/purchaseOrders",
    authenticate,
    validateUserId,
    purchaseOrderRoute
  );
  app.use(
    "/api/protected/purchaseOrderDetails",
    authenticate,
    validateUserId,
    purchaseOrderDetailRoute
  );
  //admin routes
  app.use("/api/admin/users", authenticate, requireAdmin, adminUserRoute);
  app.use(
    "/api/admin/categories",
    authenticate,
    requireAdmin,
    adiminCategoryRoute
  );
  app.use("/api/admin/products", authenticate, requireAdmin, adminProductRoute);
  app.use(
    "/api/admin/addresses",
    authenticate,
    requireAdmin,
    adminAddressRoute
  );
  app.use(
    "/api/admin/discounts",
    authenticate,
    requireAdmin,
    adminDiscountRoute
  );
  app.use(
    "/api/admin/favorites",
    authenticate,
    requireAdmin,
    adminFavoriteRoute
  );
  app.use(
    "/api/admin/galleryProducts",
    authenticate,
    requireAdmin,
    adminGalleryProductRoute
  );
  app.use(
    "/api/admin/galleries",
    authenticate,
    requireAdmin,
    adminGalleryRoute
  );
  app.use(
    "/api/admin/productDiscounts",
    authenticate,
    requireAdmin,
    adminProductDiscountRoute
  );
  app.use(
    "/api/admin/productVariants",
    authenticate,
    requireAdmin,
    adminProductVariantRoute
  );
  app.use(
    "/api/admin/purchaseOrders",
    authenticate,
    requireAdmin,
    adminPurchaseOrderRoute
  );
  app.use(
    "/api/admin/purchaseOrderDetails",
    authenticate,
    requireAdmin,
    adminPurchaseOrderDetailRoute
  );
  app.use("/api/admin/sizes", authenticate, requireAdmin, adminSizeRoute);
  app.use("/api/admin/types", authenticate, requireAdmin, adminTypeRoute);

  app.use(errorHandler);
  app.listen(options.port, () => {
    console.log(`server levantado en el puerto: ${options.port}`);
  });
};
//npx prisma generate
//npx prisma migrate dev --name init

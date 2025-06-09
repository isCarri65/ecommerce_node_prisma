import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoute";
import { errorHandler } from "./middlewares/errorHandler";
import "./types/express";

import adminUserRoute from "./routes/admin/UserRoute";
import userRoute from "./routes/protected/UserRoute";
import { PrismaClient } from "@prisma/client";
import categoryRoute from "./routes/public/CategoryRoute";
import productRoute from "./routes/ProductRoute";
import addressRoute from "./routes/protected/AddressRoute";
import discountRoute from "./routes/DiscountRoute";
import favoriteRoute from "./routes/FavoriteRoute";
import galleryProductRoute from "./routes/GalleryProductRoute";
import galleryRoute from "./routes/GalleryRoute";
import productVariantRoute from "./routes/ProductVariantRoute";
import productDiscountRoute from "./routes/ProductDiscountRoute";
import purchaseOrderRoute from "./routes/PurchaseOrderRoute";
import purchaseOrderDetailRoute from "./routes/PurchaseOrderDetailRoute";
import sizeRoute from "./routes/public/SizeRoute";
import typeRoute from "./routes/public/TypeRoute";
import { authenticate } from "./middlewares/auth.middleware";
import { requireAdmin } from "./middlewares/requireAdmin";

export const createServer = (options: any) => {
  const prisma = new PrismaClient();
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  //public routes
  app.use("/categories", categoryRoute);
  app.use("/products", productRoute);
  app.use("/addresses", addressRoute);
  app.use("/discounts", discountRoute);
  app.use("/favorites", favoriteRoute);
  app.use("/galleryProducts", galleryProductRoute);
  app.use("/galleries", galleryRoute);
  app.use("/productDiscounts", productDiscountRoute);
  app.use("/productVariants", productVariantRoute);
  app.use("/purchaseOrders", purchaseOrderRoute);
  app.use("/purchaseOrderDetails", purchaseOrderDetailRoute);
  app.use("/sizes", sizeRoute);
  app.use("/types", typeRoute);
  //user routes
  app.use("/user/users", authenticate, userRoute);

  //admin routes
  app.use("/admin/users", authenticate, requireAdmin, adminUserRoute);

  app.use("/api/auth", authRoutes);
  app.use(errorHandler);
  app.listen(options.port, () => {
    console.log(`server levantado en el puerto: ${options.port}`);
  });
};
//npx prisma generate
//npx prisma migrate dev --name init

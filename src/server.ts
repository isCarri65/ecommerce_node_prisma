import express from "express";
import userRoute from "./routes/UserRoute";
import { PrismaClient } from "@prisma/client";
import categoryRoute from "./routes/CategoryRoute";
import productRoute from "./routes/ProductRoute";
import addressRoute from "./routes/AddressRoute";
import discountRoute from "./routes/DiscountRoute";
import favoriteRoute from "./routes/FavoriteRoute";
import galleryProductRoute from "./routes/GalleryProductRoute";
import galleryRoute from "./routes/GalleryRoute";
import productVariantRoute from "./routes/ProductVariantRoute";
import productDiscountRoute from "./routes/ProductDiscountRoute";
import purchaseOrderRoute from "./routes/PurchaseOrderRoute";
import purchaseOrderDetailRoute from "./routes/PurchaseOrderDetailRoute";
import sizeRoute from "./routes/SizeRoute";
import typeRoute from "./routes/TypeRoute";

export const createServer = (options: { port: number; path: string }) => {
  const prisma = new PrismaClient();
  const app = express();

  app.use(express.json());

  app.use("/users", userRoute);
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
  app.listen(options.port, () => {
    console.log(`server levantado en el puerto: ${options.port}`);
  });
};
//npx prisma generate
//npx prisma migrate dev --name init

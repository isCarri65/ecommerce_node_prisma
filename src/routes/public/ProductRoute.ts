import { Router } from "express";
import { ProductController } from "../../controllers/ProductController";

const router = Router();
const productController = new ProductController();

router.get("/", (req, res) => productController.getAll(req, res));
router.get("/:id", (req, res) => productController.getById(req, res));

export default router;

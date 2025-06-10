import { Router } from "express";
import { ProductController } from "../../controllers/ProductController";

const router = Router();
const productController = new ProductController();

router.post("/", (req, res) => productController.create(req, res));
router.put("/:id", (req, res) => productController.update(req, res));
router.delete("/:id", (req, res) => productController.delete(req, res));

export default router;

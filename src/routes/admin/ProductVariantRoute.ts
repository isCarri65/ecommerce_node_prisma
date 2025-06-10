import { Router } from "express";
import { ProductVariantController } from "../../controllers/ProductVariantController";

const router = Router();
const productVariantController = new ProductVariantController();

router.get("/", (req, res) => productVariantController.getAll(req, res));
router.get("/:id", (req, res) => productVariantController.getById(req, res));
router.post("/", (req, res) => productVariantController.create(req, res));
router.put("/:id", (req, res) => productVariantController.update(req, res));
router.delete("/:id", (req, res) => productVariantController.delete(req, res));

export default router;

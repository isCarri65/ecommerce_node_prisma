import { Router } from "express";
import { ProductDiscountController } from "../../controllers/ProductDiscountController";

const router = Router();
const productDiscountController = new ProductDiscountController();

router.get("/", (req, res) => productDiscountController.getAll(req, res));
router.get("/:id", (req, res) => productDiscountController.getById(req, res));

export default router;

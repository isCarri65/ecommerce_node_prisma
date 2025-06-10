import { Router } from "express";
import { ProductDiscountController } from "../../controllers/ProductDiscountController";

const router = Router();
const productDiscountController = new ProductDiscountController();

router.post("/", (req, res) => productDiscountController.create(req, res));
router.put("/:id", (req, res) => productDiscountController.update(req, res));
router.delete("/:id", (req, res) => productDiscountController.delete(req, res));

export default router;

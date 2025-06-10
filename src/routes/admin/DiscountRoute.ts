import { Router } from "express";
import { DiscountController } from "../../controllers/DiscountController";

const router = Router();
const discountController = new DiscountController();

router.post("/", (req, res) => discountController.create(req, res));
router.put("/:id", (req, res) => discountController.update(req, res));
router.delete("/:id", (req, res) => discountController.delete(req, res));

export default router;

import { Router } from "express";
import { DiscountController } from "../../controllers/DiscountController";

const router = Router();
const discountController = new DiscountController();

router.get("/", (req, res) => discountController.getAll(req, res));
router.get("/:id", (req, res) => discountController.getById(req, res));

export default router;

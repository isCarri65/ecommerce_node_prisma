import { Router } from "express";
import { ProductDiscountController } from "../controllers/ProductDiscountController";

const router = Router();
const productDiscountController = new ProductDiscountController();

router.get("/", (req, res) => productDiscountController.getAll(req, res));
router.get("/:id", (req, res) => productDiscountController.getById(req, res));
router.post("/", (req, res) => productDiscountController.create(req, res));
router.put("/:id", (req, res) => productDiscountController.update(req, res));
router.delete("/:id", (req, res) => productDiscountController.delete(req, res));

export default router;

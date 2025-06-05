import { Router } from "express";
import { DiscountController } from "../controllers/DiscountController";

const router = Router();
const discountController = new DiscountController();

router.get("/", (req, res) => discountController.getAll(req, res));
router.get("/:id", (req, res) => discountController.getById(req, res));
router.post("/", (req, res) => discountController.create(req, res));
router.put("/:id", (req, res) => discountController.update(req, res));
router.delete("/:id", (req, res) => discountController.delete(req, res));

export default router;

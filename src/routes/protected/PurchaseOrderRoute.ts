import { Router } from "express";
import { PurchaseOrderController } from "../../controllers/PurchaseOrderController";

const router = Router();
const purchaseOrderController = new PurchaseOrderController();

router.get("/", (req, res) => purchaseOrderController.getAll(req, res));
router.get("/:id", (req, res) => purchaseOrderController.getById(req, res));

export default router;

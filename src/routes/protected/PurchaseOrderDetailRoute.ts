import { Router } from "express";
import { PurchaseOrderDetailController } from "../../controllers/PurchaseOrderDetailController";

const router = Router();
const purchaseOrderDetailController = new PurchaseOrderDetailController();

router.get("/", (req, res) => purchaseOrderDetailController.getAll(req, res));
router.get("/:id", (req, res) =>
  purchaseOrderDetailController.getById(req, res)
);

export default router;

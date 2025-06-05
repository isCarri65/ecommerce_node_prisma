import { Router } from "express";
import { PurchaseOrderDetailController } from "../controllers/PurchaseOrderDetailController";

const router = Router();
const purchaseOrderDetailController = new PurchaseOrderDetailController();

router.get("/", (req, res) => purchaseOrderDetailController.getAll(req, res));
router.get("/:id", (req, res) =>
  purchaseOrderDetailController.getById(req, res)
);
router.post("/", (req, res) => purchaseOrderDetailController.create(req, res));
router.put("/:id", (req, res) =>
  purchaseOrderDetailController.update(req, res)
);
router.delete("/:id", (req, res) =>
  purchaseOrderDetailController.delete(req, res)
);

export default router;

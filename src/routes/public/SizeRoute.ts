import { Router } from "express";
import { SizeController } from "../../controllers/SizeController";

const router = Router();
const sizeController = new SizeController();

router.get("/", (req, res) => sizeController.getAll(req, res));
router.get("/:id", (req, res) => sizeController.getById(req, res));

export default router;

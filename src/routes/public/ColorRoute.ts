import { Router } from "express";
import { ColorController } from "../../controllers/ColorController";

const router = Router();
const colorController = new ColorController();

router.get("/", (req, res) => colorController.getAll(req, res));
router.get("/:id", (req, res) => colorController.getById(req, res));

export default router;

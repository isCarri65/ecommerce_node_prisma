import { Router } from "express";
import { ColorController } from "../controllers/ColorController";

const router = Router();
const colorController = new ColorController();

router.get("/", (req, res) => colorController.getAll(req, res));
router.get("/:id", (req, res) => colorController.getById(req, res));
router.post("/", (req, res) => colorController.create(req, res));
router.put("/:id", (req, res) => colorController.update(req, res));
router.delete("/:id", (req, res) => colorController.delete(req, res));

export default router;

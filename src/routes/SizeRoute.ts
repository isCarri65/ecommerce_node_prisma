import { Router } from "express";
import { SizeController } from "../controllers/SizeController";

const router = Router();
const sizeController = new SizeController();

router.get("/", (req, res) => sizeController.getAll(req, res));
router.get("/:id", (req, res) => sizeController.getById(req, res));
router.post("/", (req, res) => sizeController.create(req, res));
router.put("/:id", (req, res) => sizeController.update(req, res));
router.delete("/:id", (req, res) => sizeController.delete(req, res));

export default router;

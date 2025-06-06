import { Router } from "express";
import { TypeController } from "../../controllers/TypeController";

const router = Router();
const typeController = new TypeController();

router.get("/", (req, res) => typeController.getAll(req, res));
router.get("/:id", (req, res) => typeController.getById(req, res));

export default router;

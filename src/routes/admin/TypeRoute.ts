import { Router } from "express";
import { TypeController } from "../../controllers/TypeController";

const router = Router();
const typeController = new TypeController();

router.post("/", (req, res) => typeController.create(req, res));
router.put("/:id", (req, res) => typeController.update(req, res));
router.delete("/:id", (req, res) => typeController.delete(req, res));

export default router;

import { Router } from "express";
import { CategoryController } from "../../controllers/CategoryController";

const router = Router();
const categoryController = new CategoryController();

router.get("/", (req, res) => categoryController.getAll(req, res));
router.get("/:id", (req, res) => categoryController.getById(req, res));

export default router;

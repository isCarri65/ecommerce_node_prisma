import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const router = Router();
const categoryController = new CategoryController();

router.get("/", (req, res) => categoryController.getAll(req, res));
router.get("/:id", (req, res) => categoryController.getById(req, res));
router.post("/", (req, res) => categoryController.create(req, res));
router.put("/:id", (req, res) => categoryController.update(req, res));
router.delete("/:id", (req, res) => categoryController.delete(req, res));

export default router;

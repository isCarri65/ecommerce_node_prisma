import { Router } from "express";
import { FavoriteController } from "../../controllers/FavoriteController";

const router = Router();
const favoriteController = new FavoriteController();

router.get("/", (req, res) => favoriteController.getAll(req, res));
router.get("/:id", (req, res) => favoriteController.getById(req, res));

export default router;

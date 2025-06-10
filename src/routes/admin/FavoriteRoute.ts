import { Router } from "express";
import { FavoriteController } from "../../controllers/FavoriteController";

const router = Router();
const favoriteController = new FavoriteController();

router.post("/", (req, res) => favoriteController.create(req, res));
router.put("/:id", (req, res) => favoriteController.update(req, res));
router.delete("/:id", (req, res) => favoriteController.delete(req, res));

export default router;

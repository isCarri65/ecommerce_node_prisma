import { Router } from "express";
import { GalleryProductController } from "../../controllers/GalleryProductController";

const router = Router();
const galleryProductController = new GalleryProductController();

router.get("/", (req, res) => galleryProductController.getAll(req, res));
router.get("/:id", (req, res) => galleryProductController.getById(req, res));

export default router;

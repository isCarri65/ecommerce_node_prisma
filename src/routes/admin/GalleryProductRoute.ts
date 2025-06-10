import { Router } from "express";
import { GalleryProductController } from "../../controllers/GalleryProductController";

const router = Router();
const galleryProductController = new GalleryProductController();

router.post("/", (req, res) => galleryProductController.create(req, res));
router.put("/:id", (req, res) => galleryProductController.update(req, res));
router.delete("/:id", (req, res) => galleryProductController.delete(req, res));

export default router;

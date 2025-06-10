import { Router } from "express";
import { GalleryController } from "../../controllers/GalleryController";

const router = Router();
const galleryController = new GalleryController();

router.get("/", (req, res) => galleryController.getAll(req, res));
router.get("/:id", (req, res) => galleryController.getById(req, res));
router.post("/", (req, res) => galleryController.create(req, res));
router.put("/:id", (req, res) => galleryController.update(req, res));
router.delete("/:id", (req, res) => galleryController.delete(req, res));

export default router;

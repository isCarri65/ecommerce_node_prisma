"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GalleryProductController_1 = require("../controllers/GalleryProductController");
const router = (0, express_1.Router)();
const galleryProductController = new GalleryProductController_1.GalleryProductController();
router.get("/", (req, res) => galleryProductController.getAll(req, res));
router.get("/:id", (req, res) => galleryProductController.getById(req, res));
router.post("/", (req, res) => galleryProductController.create(req, res));
router.put("/:id", (req, res) => galleryProductController.update(req, res));
router.delete("/:id", (req, res) => galleryProductController.delete(req, res));
exports.default = router;

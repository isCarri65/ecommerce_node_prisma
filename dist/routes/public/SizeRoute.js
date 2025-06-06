"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SizeController_1 = require("../../controllers/SizeController");
const router = (0, express_1.Router)();
const sizeController = new SizeController_1.SizeController();
router.get("/", (req, res) => sizeController.getAll(req, res));
router.get("/:id", (req, res) => sizeController.getById(req, res));
exports.default = router;

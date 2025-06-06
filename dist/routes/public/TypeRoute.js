"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TypeController_1 = require("../../controllers/TypeController");
const router = (0, express_1.Router)();
const typeController = new TypeController_1.TypeController();
router.get("/", (req, res) => typeController.getAll(req, res));
router.get("/:id", (req, res) => typeController.getById(req, res));
exports.default = router;

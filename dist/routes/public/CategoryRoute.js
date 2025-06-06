"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../../controllers/CategoryController");
const router = (0, express_1.Router)();
const categoryController = new CategoryController_1.CategoryController();
router.get("/", (req, res) => categoryController.getAll(req, res));
router.get("/:id", (req, res) => categoryController.getById(req, res));
exports.default = router;

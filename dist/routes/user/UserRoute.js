"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/UserController");
const router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
router.get("/:id", (req, res) => userController.getById(req, res));
router.put("/:id", (req, res) => userController.update(req, res));
exports.default = router;

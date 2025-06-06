"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRules = exports.registerRules = void 0;
const express_validator_1 = require("express-validator");
exports.registerRules = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email inválido"),
    (0, express_validator_1.body)("password")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),
    (0, express_validator_1.body)("name").notEmpty().withMessage("El nombre es obligatorio"),
];
exports.loginRules = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email inválido"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("La contraseña es obligatoria"),
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const httpError_1 = require("../errors/httpError");
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const extracted = errors
            .array()
            .map((err) => ({ field: err.type, message: err.msg }));
        throw new httpError_1.HttpError(422, JSON.stringify(extracted));
    }
    next();
};
exports.validateRequest = validateRequest;

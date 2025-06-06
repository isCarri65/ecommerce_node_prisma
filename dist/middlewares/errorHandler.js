"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const httpError_1 = require("../errors/httpError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof httpError_1.HttpError) {
        res.status(err.statusCode).json({ error: err.message });
    }
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
};
exports.errorHandler = errorHandler;

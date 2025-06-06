"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = void 0;
const httpError_1 = require("../errors/httpError");
const requireAdmin = (req, res, next) => {
    console.log(req.user);
    if (!req.user || req.user.role !== "ADMIN") {
        throw new httpError_1.HttpError(403, "Acceso denegado: se requiere rol ADMIN");
    }
    next();
};
exports.requireAdmin = requireAdmin;

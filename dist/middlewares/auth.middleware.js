"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwt_1 = require("../utils/jwt");
const httpError_1 = require("../errors/httpError");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        throw new httpError_1.HttpError(401, "Token requerido");
    const token = authHeader.split(" ")[1];
    if (!token)
        throw new httpError_1.HttpError(401, "Token malformado");
    try {
        const payload = (0, jwt_1.verifyAccessToken)(token);
        req.user = payload;
        next();
    }
    catch {
        throw new httpError_1.HttpError(401, "Token inválido o expirado");
    }
};
exports.authenticate = authenticate;

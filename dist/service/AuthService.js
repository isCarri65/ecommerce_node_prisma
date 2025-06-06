"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeRefreshTokenService = exports.refreshTokenService = exports.loginService = exports.registerService = void 0;
const Client_1 = __importDefault(require("../utils/Client"));
const httpError_1 = require("../errors/httpError");
const hash_1 = require("../utils/hash");
const jwt_1 = require("../utils/jwt");
const env_1 = require("../config/env");
const date_fns_1 = require("date-fns");
// Registrar usuario
const registerService = async (email, password, name, role = "USER" // Rol por defecto
) => {
    const existingUser = await Client_1.default.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new httpError_1.HttpError(409, "El email ya está registrado");
    }
    console.log("Creando usuario con email:", email, "y rol:", role, "nombre:", name);
    const hashed = await (0, hash_1.hashPassword)(password);
    console.log("Contraseña hasheada:", hashed);
    const user = await Client_1.default.user.create({
        data: { email, password: hashed, name, role },
    });
    if (!user) {
        throw new httpError_1.HttpError(500, "Error al crear el usuario");
    }
    const payload = {
        userId: user.id,
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, jwt_1.generateAccessToken)(payload);
    const refreshToken = (0, jwt_1.generateRefreshToken)(payload);
    // Guardar refresh token en BD
    const expiresAt = (0, date_fns_1.addDays)(new Date(), parseInt(env_1.envs.jwt.refreshExpiration));
    await Client_1.default.refreshToken.create({
        data: { token: refreshToken, userId: user.id, expiresAt },
    });
    return { user, accessToken, refreshToken };
};
exports.registerService = registerService;
// Login usuario
const loginService = async (email, password) => {
    const user = await Client_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new httpError_1.HttpError(401, "Credenciales inválidas");
    const valid = await (0, hash_1.comparePasswords)(password, user.password);
    if (!valid)
        throw new httpError_1.HttpError(401, "Credenciales inválidas");
    const payload = {
        userId: user.id,
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, jwt_1.generateAccessToken)(payload);
    const refreshToken = (0, jwt_1.generateRefreshToken)(payload);
    // Almacenar refresh token
    const expiresAt = (0, date_fns_1.addDays)(new Date(), parseInt(env_1.envs.jwt.refreshExpiration));
    await Client_1.default.refreshToken.create({
        data: { token: refreshToken, userId: user.id, expiresAt },
    });
    return { user, accessToken, refreshToken };
};
exports.loginService = loginService;
// Refrescar tokens
const refreshTokenService = async (token) => {
    let payload;
    try {
        payload = (0, jwt_1.verifyRefreshToken)(token);
    }
    catch {
        throw new httpError_1.HttpError(401, "Refresh token inválido");
    }
    // Verificar existencia en BD
    const stored = await Client_1.default.refreshToken.findUnique({ where: { token } });
    if (!stored)
        throw new httpError_1.HttpError(401, "Refresh token no encontrado o ya revocado");
    if (stored.expiresAt < new Date()) {
        await Client_1.default.refreshToken.delete({ where: { token } });
        throw new httpError_1.HttpError(401, "Refresh token expirado");
    }
    // Generar nuevos tokens
    const newPayload = {
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
    };
    const accessToken = (0, jwt_1.generateAccessToken)(newPayload);
    const newRefreshToken = (0, jwt_1.generateRefreshToken)(newPayload);
    // Reemplazar en BD: eliminar viejo, crear nuevo
    await Client_1.default.refreshToken.delete({ where: { token } });
    const expiresAt = (0, date_fns_1.addDays)(new Date(), parseInt(env_1.envs.jwt.refreshExpiration));
    await Client_1.default.refreshToken.create({
        data: { token: newRefreshToken, userId: payload.userId, expiresAt },
    });
    return { accessToken, refreshToken: newRefreshToken };
};
exports.refreshTokenService = refreshTokenService;
// Logout (revoca refresh token)
const revokeRefreshTokenService = async (token) => {
    await Client_1.default.refreshToken.deleteMany({ where: { token } });
};
exports.revokeRefreshTokenService = revokeRefreshTokenService;

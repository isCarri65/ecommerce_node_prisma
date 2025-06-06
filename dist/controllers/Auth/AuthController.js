"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.login = exports.register = void 0;
const AuthService = __importStar(require("../../service/AuthService"));
const httpError_1 = require("../../errors/httpError");
const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const { user, accessToken, refreshToken } = await AuthService.registerService(email, password, name, "USER"); //
        res.status(201).json({ user, accessToken, refreshToken });
    }
    catch (error) {
        if (error instanceof httpError_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, accessToken, refreshToken } = await AuthService.loginService(email, password);
        res.status(200).json({ user, accessToken, refreshToken });
    }
    catch (error) {
        if (error instanceof httpError_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};
exports.login = login;
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        const tokens = await AuthService.refreshTokenService(refreshToken);
        res.status(200).json(tokens);
    }
    catch (error) {
        if (error instanceof httpError_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};
exports.refreshToken = refreshToken;
const logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        await AuthService.revokeRefreshTokenService(refreshToken);
        res.status(200).json({ message: "Logout exitoso" });
    }
    catch (error) {
        if (error instanceof httpError_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};
exports.logout = logout;

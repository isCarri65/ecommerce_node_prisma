"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const env_1 = require("../config/env");
const hashPassword = async (password) => {
    return bcrypt_1.default.hash(password, env_1.envs.bcrypt.saltRounds);
};
exports.hashPassword = hashPassword;
const comparePasswords = async (plain, hashed) => {
    return bcrypt_1.default.compare(plain, hashed);
};
exports.comparePasswords = comparePasswords;

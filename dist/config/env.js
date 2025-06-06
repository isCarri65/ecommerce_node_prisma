"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envalid_1 = require("envalid");
const env = (0, envalid_1.cleanEnv)(process.env, {
    NODE_ENV: (0, envalid_1.str)({
        choices: ["development", "production", "test"],
        default: "development",
    }),
    PORT: (0, envalid_1.port)({ default: 3000 }),
    DATABASE_URL: (0, envalid_1.str)(),
    JWT_ACCESS_SECRET: (0, envalid_1.str)(),
    JWT_REFRESH_SECRET: (0, envalid_1.str)(),
    JWT_ACCESS_EXPIRATION: (0, envalid_1.str)({ default: "15m" }),
    JWT_REFRESH_EXPIRATION: (0, envalid_1.str)({ default: "7d" }),
    BCRYPT_SALT_ROUNDS: (0, envalid_1.num)({ default: 10 }),
});
exports.envs = {
    nodeEnv: env.NODE_ENV,
    port: env.PORT,
    databaseUrl: env.DATABASE_URL,
    jwt: {
        accessSecret: env.JWT_ACCESS_SECRET,
        refreshSecret: env.JWT_REFRESH_SECRET,
        accessExpiration: env.JWT_ACCESS_EXPIRATION,
        refreshExpiration: env.JWT_REFRESH_EXPIRATION,
    },
    bcrypt: {
        saltRounds: env.BCRYPT_SALT_ROUNDS,
    },
};

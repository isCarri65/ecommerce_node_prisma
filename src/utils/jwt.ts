import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { envs } from "../config/env";
import { Role } from "@prisma/client";
export interface TokenPayload {
  userId: number;
  email: string;
  role: Role;
}
export const generateAccessToken = (payload: TokenPayload): string => {
  console.log(envs.jwt.accessExpiration);
  return jwt.sign(payload, envs.jwt.accessSecret, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, envs.jwt.refreshSecret, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, envs.jwt.accessSecret) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, envs.jwt.refreshSecret) as TokenPayload;
};

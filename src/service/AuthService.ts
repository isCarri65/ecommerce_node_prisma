import prisma from "../utils/Client";
import { HttpError } from "../errors/httpError";
import { hashPassword, comparePasswords } from "../utils/hash";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  TokenPayload,
} from "../utils/jwt";
import { envs } from "../config/env";
import { addDays } from "date-fns";
import { Role } from "@prisma/client";

// Registrar usuario
export const registerService = async (
  email: string,
  password: string,
  name: string,
  role: Role = "USER" // Rol por defecto
) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new HttpError(409, "El email ya está registrado");
  }
  console.log(
    "Creando usuario con email:",
    email,
    "y rol:",
    role,
    "nombre:",
    name
  );
  const hashed = await hashPassword(password);
  console.log("Contraseña hasheada:", hashed);
  const user = await prisma.user.create({
    data: { email, password: hashed, name, role },
  });
  if (!user) {
    throw new HttpError(500, "Error al crear el usuario");
  }

  const payload: TokenPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Guardar refresh token en BD
  const expiresAt = addDays(new Date(), parseInt(envs.jwt.refreshExpiration));
  await prisma.refreshToken.create({
    data: { token: refreshToken, userId: user.id, expiresAt },
  });

  return { user, accessToken, refreshToken };
};

// Login usuario
export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new HttpError(401, "Credenciales inválidas");

  const valid = await comparePasswords(password, user.password);
  if (!valid) throw new HttpError(401, "Credenciales inválidas");

  const payload: TokenPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Almacenar refresh token
  const expiresAt = addDays(new Date(), parseInt(envs.jwt.refreshExpiration));
  await prisma.refreshToken.create({
    data: { token: refreshToken, userId: user.id, expiresAt },
  });

  return { user, accessToken, refreshToken };
};

// Refrescar tokens
export const refreshTokenService = async (token: string) => {
  let payload: TokenPayload;
  try {
    payload = verifyRefreshToken(token);
  } catch {
    throw new HttpError(401, "Refresh token inválido");
  }

  // Verificar existencia en BD
  const stored = await prisma.refreshToken.findUnique({ where: { token } });
  if (!stored)
    throw new HttpError(401, "Refresh token no encontrado o ya revocado");
  if (stored.expiresAt < new Date()) {
    await prisma.refreshToken.delete({ where: { token } });
    throw new HttpError(401, "Refresh token expirado");
  }

  // Generar nuevos tokens
  const newPayload: TokenPayload = {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  };
  const accessToken = generateAccessToken(newPayload);
  const newRefreshToken = generateRefreshToken(newPayload);

  // Reemplazar en BD: eliminar viejo, crear nuevo
  await prisma.refreshToken.delete({ where: { token } });
  const expiresAt = addDays(new Date(), parseInt(envs.jwt.refreshExpiration));
  await prisma.refreshToken.create({
    data: { token: newRefreshToken, userId: payload.userId, expiresAt },
  });

  return { accessToken, refreshToken: newRefreshToken };
};

// Logout (revoca refresh token)
export const revokeRefreshTokenService = async (token: string) => {
  await prisma.refreshToken.deleteMany({ where: { token } });
};

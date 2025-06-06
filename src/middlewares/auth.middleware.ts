import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { HttpError } from "../errors/httpError";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new HttpError(401, "Token requerido");

  const token = authHeader.split(" ")[1];
  if (!token) throw new HttpError(401, "Token malformado");

  try {
    const payload = verifyAccessToken(token);
    (req as any).user = payload;
    next();
  } catch {
    throw new HttpError(401, "Token inválido o expirado");
  }
};

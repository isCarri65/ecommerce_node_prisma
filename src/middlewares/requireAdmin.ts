import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/httpError";

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user);
  if (!req.user || req.user.role !== "ADMIN") {
    throw new HttpError(403, "Acceso denegado: se requiere rol ADMIN");
  }
  next();
};

// middlewares/validateUserIdParam.ts
import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/httpError";

export default function validateUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const userIdToken = req.user?.userId.toString();

  if (userIdToken !== id) {
    throw new HttpError(
      403,
      "Acceso denegado: no puedes acceder a recursos de otros usuarios"
    );
  }

  next();
}

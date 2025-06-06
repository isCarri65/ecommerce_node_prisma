import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { HttpError } from "../errors/httpError";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extracted = errors
      .array()
      .map((err) => ({ field: err.type, message: err.msg }));
    throw new HttpError(422, JSON.stringify(extracted));
  }
  next();
};

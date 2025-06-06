import { Request, Response } from "express";
import * as AuthService from "../../service/AuthService";
import { HttpError } from "../../errors/httpError";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const { user, accessToken, refreshToken } =
      await AuthService.registerService(email, password, name, "USER"); //
    res.status(201).json({ user, accessToken, refreshToken });
  } catch (error: any) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = await AuthService.loginService(
      email,
      password
    );
    res.status(200).json({ user, accessToken, refreshToken });
  } catch (error: any) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await AuthService.refreshTokenService(refreshToken);
    res.status(200).json(tokens);
  } catch (error: any) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    await AuthService.revokeRefreshTokenService(refreshToken);
    res.status(200).json({ message: "Logout exitoso" });
  } catch (error: any) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

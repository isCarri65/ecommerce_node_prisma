import { Router } from "express";
import * as AuthController from "../controllers/Auth/AuthController";
import { registerRules, loginRules } from "../validators/auth.validator";
import { validateRequest } from "../middlewares/validate";

const router = Router();

router.post(
  "/register",
  registerRules,
  validateRequest,
  AuthController.register
);
router.post("/login", loginRules, validateRequest, AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/logout", AuthController.logout);

export default router;

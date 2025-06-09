import { Router } from "express";
import { UserController } from "../../controllers/UserController";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();
const userController = new UserController();

router.get("/:id", (req, res) => userController.getById(req, res));
router.put("/:id", (req, res) => userController.update(req, res));

export default router;

import { Router } from "express";
import { AddressController } from "../../controllers/AddressController";

const router = Router();
const addressController = new AddressController();

router.get("/", (req, res) => addressController.getAll(req, res));
router.get("/:id", (req, res) => addressController.getById(req, res));
router.post("/", (req, res) => addressController.create(req, res));
router.put("/:id", (req, res) => addressController.update(req, res));
router.delete("/:id", (req, res) => addressController.delete(req, res));

export default router;

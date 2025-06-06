"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor(service) {
        this.service = service;
    }
    async getAll(req, res) {
        try {
            const items = await this.service.findAll();
            res.status(200).json(items);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async getById(req, res) {
        try {
            const id = Number(req.params.id);
            const item = await this.service.findById(id);
            if (!item) {
                res.status(404).json({ error: "Registro no encontrado" });
            }
            else {
                res.status(200).json(item);
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async create(req, res) {
        try {
            const data = req.body;
            const newItem = await this.service.create(data);
            res.status(201).json(newItem);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: `Error interno del servidor: ${error}` });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const updatedItem = await this.service.update(id, data);
            res.status(200).json(updatedItem);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            const deletedItem = await this.service.delete(id);
            res.status(200).json(deletedItem);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}
exports.BaseController = BaseController;

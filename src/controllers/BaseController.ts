import { Request, Response } from "express";
import { BaseService } from "../service/BaseService";
import { IBaseEntity } from "../types/IBaseEntity";

export abstract class BaseController<
  T extends IBaseEntity,
  S extends BaseService<T, CreateInput, UpdateInput>,
  CreateInput,
  UpdateInput
> {
  protected service: S;

  constructor(service: S) {
    this.service = service;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const items = await this.service.findAll();
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const item = await this.service.findById(id);
      if (!item) {
        res.status(404).json({ error: "Registro no encontrado" });
      } else {
        res.status(200).json(item);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateInput = req.body;
      const newItem = await this.service.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Error interno del servidor: ${error}` });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const data: UpdateInput = req.body;
      const updatedItem = await this.service.update(id, data);
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const deletedItem = await this.service.delete(id);
      res.status(200).json(deletedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}

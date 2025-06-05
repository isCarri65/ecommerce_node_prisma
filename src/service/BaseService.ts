// BaseService.ts
import { PrismaClient } from "@prisma/client";
import { IBaseEntity } from "../types/IBaseEntity";

const prisma = new PrismaClient();

export abstract class BaseService<
  T extends IBaseEntity,
  CreateInput,
  UpdateInput
> {
  // El modelo se inyecta como la parte correspondiente del Prisma Client (ej.: prisma.product)
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  // Obtiene todos los registros que no hayan sido eliminados lógicamente
  async findAll(where: Partial<T> = {}): Promise<T[]> {
    return await this.model.findMany({
      where: { ...where, deleted: false },
    });
  }

  // Obtiene un registro por id (si no está marcado como eliminado)
  async findById(id: number): Promise<T | null> {
    return await this.model.findFirst({
      where: { id, deleted: false },
    });
  }

  // Crea un nuevo registro
  // Se omite id y deleted ya que id se autogenera y deleted tiene valor default false
  async create(data: CreateInput): Promise<T> {
    return await this.model.create({
      data,
    });
  }

  // Actualiza un registro existente
  async update(id: number, data: UpdateInput): Promise<T> {
    return await this.model.update({
      where: { id },
      data,
    });
  }

  // Borrado lógico: actualiza el campo deleted a true en vez de eliminar físicamente
  async delete(id: number): Promise<T> {
    return await this.model.update({
      where: { id },
      data: { deleted: true },
    });
  }
}

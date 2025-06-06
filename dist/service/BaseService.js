"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
// BaseService.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class BaseService {
    constructor(model) {
        this.model = model;
    }
    // Obtiene todos los registros que no hayan sido eliminados lógicamente
    async findAll(where = {}) {
        return await this.model.findMany({
            where: { ...where, deleted: false },
        });
    }
    // Obtiene un registro por id (si no está marcado como eliminado)
    async findById(id) {
        return await this.model.findFirst({
            where: { id, deleted: false },
        });
    }
    // Crea un nuevo registro
    // Se omite id y deleted ya que id se autogenera y deleted tiene valor default false
    async create(data) {
        return await this.model.create({
            data,
        });
    }
    // Actualiza un registro existente
    async update(id, data) {
        return await this.model.update({
            where: { id },
            data,
        });
    }
    // Borrado lógico: actualiza el campo deleted a true en vez de eliminar físicamente
    async delete(id) {
        return await this.model.update({
            where: { id },
            data: { deleted: true },
        });
    }
}
exports.BaseService = BaseService;

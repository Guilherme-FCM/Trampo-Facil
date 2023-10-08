import { Request, Response } from "express";
import { VagaService } from "../services/VagaService";

const service = new VagaService();

export class VagaController {
  public static async index(request: Request, response: Response) {
    try {
      const vagas = await service.findAll();
      return response.status(200).json(vagas);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  public static async getById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const vaga = await service.findById(id);

      if (!vaga) return response.status(404).json({
          message: 'Recurso não encontrado'
        });

      return response.status(200).json(vaga);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  public static async create(request: Request, response: Response) {
    const body = request.body;

    try {
      const vaga = await service.create(body);
      return response.status(200).json(vaga);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  public static async update(request: Request, response: Response) {
    const { id } = request.params;
    const body = request.body;

    try {
      const vaga = await service.update(id, body);

      if (!vaga) return response.status(404).json({
          message: 'Recurso não encontrado'
        });
      
      return response.status(200).json(vaga);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  public static async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deleted = await service.delete(id);
     
      if (!deleted) return response.status(400).json({
          message: 'Não foi possível remover este recurso',
        });
      
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

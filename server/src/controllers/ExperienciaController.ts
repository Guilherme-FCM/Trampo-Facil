import { Request, Response } from "express";
import { ExceptionHandler } from "../utils/ExceptionHandler";
import { ExperienciaService } from "../services/ExperienciaService";

const service = new ExperienciaService();

export class ExperienciaController {
  public static async index(request: Request, response: Response) {
    const params = request.query;
    try {
      const experiencias = await service.findBy(params);
      return response.status(200).json(experiencias);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async getById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const experiencia = await service.findById(id);

      if (!experiencia) return response.status(404).json({
          message: 'Recurso não encontrado'
        });

      return response.status(200).json(experiencia);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async create(request: Request, response: Response) {
    const body = request.body;

    try {
      const experiencia = await service.create(body);
      return response.status(200).json(experiencia);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async update(request: Request, response: Response) {
    const { id } = request.params;
    const body = request.body;

    try {
      const experiencia = await service.update(id, body);

      if (!experiencia) return response.status(404).json({
          message: 'Recurso não encontrado'
        });
      
      return response.status(200).json(experiencia);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const experiencia = await service.delete(id);
     
      if (!experiencia) return response.status(400).json({
          message: 'Não foi possível remover este recurso',
        });
      
      return response.status(204).send();
    } catch (error) {
      return ExceptionHandler.handle(response, error);
    }
  }
}

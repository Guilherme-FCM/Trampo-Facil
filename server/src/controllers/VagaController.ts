import { Request, Response } from "express";
import { VagaService } from "../services/VagaService";
import { ExceptionHandler } from "../utils/ExceptionHandler";

const service = new VagaService();

export class VagaController {
  public static async index(request: Request, response: Response) {
    const params = request.query;
    try {
      const vagas = await service.findBy(params);
      return response.status(200).json(vagas);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
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
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async create(request: Request, response: Response) {
    const body = request.body;

    try {
      const vaga = await service.create(body);
      return response.status(200).json(vaga);
    } catch (error) {
      return ExceptionHandler.handle(response, error);
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
      return ExceptionHandler.handle(response, error);
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
      return ExceptionHandler.handle(response, error);
    }
  }

  public static async findByValue(request: Request, response: Response){
      const { valor } = request.query;
    try {
      const vagas = await service.findByValue(String(valor))

      if (!vagas) return response.status(400).json({
        message: 'Não foi possível buscar nada',
      });

      return response.status(200).json(vagas);
    } catch (error) {
      console.log(ExceptionHandler.handle(response, error))
      return ExceptionHandler.handle(response, error);
    }

  }
}

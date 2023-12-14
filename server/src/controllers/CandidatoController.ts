import { Request, Response } from "express";
import { CandidatoService } from "../services/CandidatoService";
import { ExceptionHandler } from "../utils/ExceptionHandler";

const service = new CandidatoService();

export class CandidatoController{
    public static async index(request:Request, response:Response){
        const params = request.query;

        try {
            const candidatos = await service.findBy(params);
            return response.status(200).json(candidatos);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async getById(request: Request, response: Response) {
        const { id } = request.params;
    
        try {
          const candidato = await service.findById(id);
    
          if (!candidato) return response.status(404).json({
              message: 'Recurso não encontrado'
            });
    
          return response.status(200).json(candidato);
        } catch (error) {
          return ExceptionHandler.handle(response, error);
        }
      }
    
      public static async create(request: Request, response: Response) {
        const body = request.body;
    
        try {
          const candidato = await service.create(body);
          return response.status(200).json(candidato);
        } catch (error) {
            if (error.message.includes('Duplicate entry'))
                return ExceptionHandler.handle(response, {'message': 'Email e Senha já cadastrado!!!'})
          return ExceptionHandler.handle(response, error);
        }
      }
    
      public static async update(request: Request, response: Response) {
        const { id } = request.params;
        const body = request.body;
    
        try {
          const candidato = await service.update(id, body);
    
          if (!candidato) return response.status(404).json({
              message: 'Recurso não encontrado'
            });
          
          return response.status(200).json(candidato);
        } catch (error) {
          return ExceptionHandler.handle(response, error);
        }
      }
    
      public static async delete(request: Request, response: Response) {
        const { id } = request.params;
    
        try {
          const candidato = await service.delete(id);
         
          if (!candidato) return response.status(400).json({
              message: 'Não foi possível remover este recurso',
            });
          
          return response.status(204).send();
        } catch (error) {
          return ExceptionHandler.handle(response, error);
        }
      }
}
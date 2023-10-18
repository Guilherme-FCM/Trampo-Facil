import { Request, Response } from "express";
import { EmpresaService } from "../services/EmpresaService";
import { ExceptionHandler } from "../utils/ExceptionHandler";

const service = new EmpresaService();

export class EmpresaController {
    public static async index(request: Request, response: Response){
        const params = request.query;
        try {
            const empresas = await service.findBy(params);
            return response.status(200).json(empresas);
        } catch (error){
            return ExceptionHandler.handle(response, error)
        }
    }

    public static async getById(request: Request, response:Response){
        const { id } = request.params;
        try {
            const empresa = await service.findById(id);
            if(!empresa){
                return response.status(400).json({
                    message: 'Recurso não encontrado'
                });
            }
            return response.status(200).json(empresa);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async create(request: Request, response: Response){
        const body = request.body;

        try {
            const empresa = await service.create(body);
            return response.status(200).json(empresa);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async update(request:Request, response:Response){
        const { id } = request.params;
        const body = request.body;

        try {
            const empresa = await service.update(id, body);

            if (!empresa) return response.status(404).json({
                message: 'Recurso não encontrado'
            });

            return response.status(200).json(empresa);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async delete(request:Request, response:Response){
        const { id } = request.params;

        try {
            const empresa = await service.delete(id);

            if(!empresa){
                return response.status(400).json({
                    message: "Não foi possivel remover este recurso"
                });
            }
            
            return response.status(204).send();
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }
}
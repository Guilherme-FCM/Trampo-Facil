import {CandidaturaService} from "../services/CandidaturaService";
import {Request, Response} from "express";
import {ExceptionHandler} from "../utils/ExceptionHandler";

const service = new CandidaturaService();

export class CandidaturaController{
    public static async index(request:Request, response:Response){
        const params = request.query;

        try {
            const candidaturas = await service.findBy(params);
            return response.status(200).json(candidaturas);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async getById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const candidatura = await service.findById(id);

            if (!candidatura) return response.status(404).json({
                message: 'Recurso não encontrado'
            });

            return response.status(200).json(candidatura);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async create(request: Request, response: Response) {
        const body = request.body;
        try {
            const candidatura = await service.create(body);
            return response.status(200).json(candidatura);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async update(request: Request, response: Response) {
        const { id } = request.params;
        const body = request.body;

        try {
            const candidatura = await service.update(id, body);

            if (!candidatura) return response.status(404).json({
                message: 'Recurso não encontrado'
            });

            return response.status(200).json(candidatura);
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }

    public static async delete(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const candidatura = await service.delete(id);

            if (!candidatura) return response.status(400).json({
                message: 'Não foi possível remover este recurso',
            });

            return response.status(204).send();
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }
}
import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { ExceptionHandler } from "../utils/ExceptionHandler";

const service = new AuthService();

export class AuthController {
    public static async login(request: Request, response: Response){
        const params = request.body;

        try {
            const user = await service.login(params);
            return response.status(200).json(user);
        } catch (error) {
            console.log(error)
            return ExceptionHandler.handle(response, error);
        }
    }
    
    public static async logout(request: Request, response: Response) {
        try {
            await service.logout();
            return response.status(204).send();
        } catch (error) {
            return ExceptionHandler.handle(response, error);
        }
    }
}
import { NotFoundException } from "../exceptions/NotFoundException";
import { ValidationException } from "../exceptions/ValidationException";
import { Response } from "express";

export class ExceptionHandler {
  public static handle(response: Response, error: any) {
    const status = this.getStatusCode(error)
    return response.status(status).json(error);
  } 

  private static getStatusCode(error: any) {
    if (error instanceof NotFoundException) return 404;
    if (error instanceof ValidationException) return 400;
    return 500;
  }
}
import { NotFoundException } from "../exceptions/NotFoundException";
import { UnprocessableEntityException } from "../exceptions/UnprocessableEntityException";
import { ValidationException } from "../exceptions/ValidationException";
import { Response } from "express";
import {QueryFailedError} from "typeorm";

export class ExceptionHandler {
  public static handle(response: Response, error: any) {
    const status = this.getStatusCode(error)
    return response.status(status).json({...error});
  } 

  private static getStatusCode(error: any) {
    if (error instanceof NotFoundException) return 404;
    if (error instanceof ValidationException) return 400;
    if (error instanceof UnprocessableEntityException) return 422;
    if (error instanceof QueryFailedError) return 400;
    return 500;
  }
}
import { ValidationError, validateSync } from "class-validator";
import { ValidationException } from "../exceptions/ValidationException";

export function validate<T extends Object>(params: Object, type: { new (): T }) {
  const data = Object.assign(new type(), params);
  const validationErrors = validateSync(data);
  
  if (validationErrors.length > 0) {
    const errors = validationErrors.map(formatError)
    throw new ValidationException(errors);
  }
  return data;
}

const formatError = (error: ValidationError) => ({
  [error.property]: Object.values(error.constraints || [])
});
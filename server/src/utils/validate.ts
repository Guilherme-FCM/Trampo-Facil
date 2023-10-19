import { ValidationError, validateSync } from "class-validator";
import { ValidationException } from "../exceptions/ValidationException";

export function validate<T extends Object>(params: Object, type: { new (): T }) {
  const data = plainToClass(params, type);
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

function plainToClass<T extends Object>(data: any, type: { new (): T }): T {
  const keys = Object.keys(new type());
  
  const object: any = {};
  keys.forEach(key => {
    if (data.hasOwnProperty(key)) 
      object[key] = data[key];
  })

  return Object.assign(new type(), object);
}
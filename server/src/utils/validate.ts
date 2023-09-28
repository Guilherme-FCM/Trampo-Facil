import { validateOrReject } from "class-validator";

// TODO: Return validation erros
// TODO: Use '{ new (): T }' type || pegar de forma dinâmica
export function validate<T extends Object>(params: Object, type: any) {
  const data = Object.assign(new type(), params);
  return validateOrReject(data);
}
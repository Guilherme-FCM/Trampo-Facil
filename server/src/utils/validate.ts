import { validateOrReject } from "class-validator";

export function validate<T extends Object>(params: Object, type: { new (): T }) {
  const data = Object.assign(new type(), params);
  return validateOrReject(data);
}
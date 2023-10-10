export class ValidationException extends Error {
  constructor (
    public errors: Object[],
    public message = 'Houve erros ao tentar validar os dados.',
  ) {
    super(message);
    this.name = 'ValidationException';
  }
}
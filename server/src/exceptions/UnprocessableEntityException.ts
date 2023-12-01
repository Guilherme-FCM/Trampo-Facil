export class UnprocessableEntityException extends Error {
  constructor (
    public message = 'Não foi possível processar estes dados.',
  ) {
    super(message);
    this.name = 'UnprocessableEntityException';
  }
}
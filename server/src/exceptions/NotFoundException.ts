export class NotFoundException extends Error {
  constructor (
    public message = 'Recurso não encontrado.',
  ) {
    super(message);
    this.name = 'NotFoundException';
  }
}
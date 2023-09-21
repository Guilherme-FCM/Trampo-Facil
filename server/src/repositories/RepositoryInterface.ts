export interface RepositoryInterface<E> {
  create(data: E): Promise<E>;
  findAll(): Promise<E[]>;
  findBy(data: E): Promise<E[]>;
  findById(id: number): Promise<E | null>;
  update(id: number, data: E): Promise<E | null>;
  delete(id: number): Promise<boolean>;
}
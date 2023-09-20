import { DeepPartial } from "typeorm";
import dataSource from "../database";
import { BaseEntity } from "../entities/BaseEntity";
import { RepositoryInterface } from "./RepositoryInterface";

export class BaseRepository<E extends BaseEntity> implements RepositoryInterface<E> {
  constructor(
    private readonly tableName: string,
    protected readonly repository = dataSource.getRepository<E>(tableName)
  ) {}
  
  async create(data: E): Promise<E> {
    return this.repository.save(data);
  }

  async findAll(): Promise<E[]> {
    return this.repository.find();
  }

  async findBy(data: DeepPartial<E>): Promise<E[]> {
    return this.repository.findBy(data);
  }

  async findById(id: E['id']): Promise<E | null> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, data: DeepPartial<E>): Promise<E | null> {
    const result = await this.repository.update(id, data);
    if (result.affected === 0) return null
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected && result.affected === 1;
  }
}
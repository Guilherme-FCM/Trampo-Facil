import { DeepPartial, EntityTarget, FindOptionsWhere } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import dataSource from "../database";
import { BaseEntity } from "../entities/BaseEntity";
import { RepositoryInterface } from "./RepositoryInterface";

export class BaseRepository<E extends BaseEntity> implements RepositoryInterface<E> {
  constructor(
    private readonly entity: EntityTarget<E> | string,
    protected readonly repository = dataSource.getRepository<E>(entity),
  ) {}
  
  async create(data: E): Promise<E> {
    return this.repository.save(data);
  }

  async findAll(): Promise<E[]> {
    return this.repository.find();
  }

  async findBy(data: DeepPartial<E>): Promise<E[]> {
    return this.repository.findBy(data as FindOptionsWhere<E>);
  }

  async findById(id: any): Promise<E | null> {
    return this.repository.findOneBy({ id });
  }

  async update(id: any, data: E): Promise<E | null> {
    const result = await this.repository.update(id, data as QueryDeepPartialEntity<E>);
    if (result.affected === 0) return null
    return this.findById(id);
  }

  async delete(id: any): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected && result.affected === 1;
  }
}

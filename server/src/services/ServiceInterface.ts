import { BaseEntity } from "../entities/BaseEntity";

export interface ServiceInterface {
  create(data: BaseEntity): Promise<BaseEntity>;
  findAll(): Promise<BaseEntity[]>;
  findBy(data: any): Promise<BaseEntity[]>;
  findById(id: number): Promise<BaseEntity | null>;
  update(id: number, data: BaseEntity): Promise<BaseEntity | null>;
  delete(id: number): Promise<boolean>;
} 
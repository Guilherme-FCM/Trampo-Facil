import { BaseEntity } from "../entities/BaseEntity";

export interface ServiceInterface {
  create(data: BaseEntity): Promise<BaseEntity>;
  findAll(): Promise<BaseEntity[]>;
  findBy(data: any): Promise<BaseEntity[]>;
  findById(id: string | number): Promise<BaseEntity | null>;
  update(id: string | number, data: BaseEntity): Promise<BaseEntity | null>;
  delete(id: string | number): Promise<boolean>;
} 
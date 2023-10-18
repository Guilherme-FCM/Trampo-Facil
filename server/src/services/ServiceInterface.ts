export interface ServiceInterface {
  create(data: any): Promise<any>;
  findAll(): Promise<any[]>;
  findBy(data: any): Promise<any[]>;
  findById(id: string | number): Promise<any | null>;
  update(id: string | number, data: any): Promise<any | null>;
  delete(id: string | number): Promise<boolean>;
} 
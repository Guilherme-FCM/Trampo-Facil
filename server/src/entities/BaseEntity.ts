import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsDate } from "class-validator";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @CreateDateColumn()
  @IsDate({ message: 'Data de criação deve ser uma data válida' })
  public created_at?: Date;

  @UpdateDateColumn()
  @IsDate({ message: 'Data de atualização deve ser uma data válida' })
  public updated_at?: Date;
}
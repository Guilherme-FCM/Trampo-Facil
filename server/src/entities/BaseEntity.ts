import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @CreateDateColumn()
  public created_at?: Date;

  @UpdateDateColumn()
  public updated_at?: Date;
}
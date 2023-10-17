import { Column, Entity, ManyToOne } from "typeorm";
import { Candidato } from "./Candidato";
import { BaseEntity } from "./BaseEntity";
import { IsDate, IsOptional, IsString, IsInt } from "class-validator";

@Entity()
export class Experiencia extends BaseEntity {
  @Column()
  @IsString({ message: 'Empresa deve ser uma string' })
  public empresa!: string;

  @Column()
  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo!: string;

  @Column({ type: "text" })
  @IsString({ message: 'Descrição deve ser uma string' })
  public descricao!: string;

  @Column()
  @IsDate({ message: 'Data de início deve ser uma data válida' })
  public data_inicio!: Date;

  @Column({ nullable: true })
  @IsDate({ message: 'Data de fim deve ser uma data válida' })
  @IsOptional()
  public data_fim?: Date;

  @ManyToOne(() => Candidato, candidato => candidato.experiencias)
  @IsInt({ message: 'Candidato deve ser um id existente' })
  public candidato!: Candidato;
}

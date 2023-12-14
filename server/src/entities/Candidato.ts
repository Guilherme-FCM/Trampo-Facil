import { Entity, Column, OneToMany, JoinTable } from "typeorm";
import { Experiencia } from "./Experiencia";
import { Usuario } from "./Usuario";
import { IsString, IsDateString, IsNotEmpty, IsInt } from "class-validator";
import {Candidatura} from "./Candidatura";

@Entity()
export class Candidato extends Usuario {
  @Column()
  @IsString({ message: 'Nome completo deve ser uma string' })
  @IsNotEmpty({message: "Nome não deve ser branco ou nulo"})
  public nome_completo!: string;

  @Column()
  @IsString({ message: 'CPF deve ser uma string' })
  public cpf!: string;

  @Column({ type: 'date', nullable: true })
  @IsDateString({}, { message: 'Data de nascimento deve ser uma data válida' })
  public data_nascimento!: Date;

  @Column({ nullable: true })
  @IsString({ message: 'Sexo deve ser uma string' })
  public sexo!: string;

  @JoinTable()
  @OneToMany(() => Experiencia, experiencia => experiencia.candidato, {
    eager: true
  })
  public experiencias!: Experiencia[];

  @OneToMany(() => Candidatura, candidatura => candidatura.candidato)
  public candidaturas?: Candidatura[];

}

import { Entity, Column, OneToMany, JoinTable } from "typeorm";
import { Experiencia } from "./Experiencia";
import { Usuario } from "./Usuario";
import { IsString, IsDate } from "class-validator";

@Entity()
export class Candidato extends Usuario {
  @Column()
  @IsString({ message: 'Nome completo deve ser uma string' })
  public nome_completo!: string;

  @Column()
  @IsString({ message: 'CPF deve ser uma string' })
  public cpf!: string;

  @Column()
  @IsDate({ message: 'Data de nascimento deve ser uma data válida' })
  public data_nascimento!: Date;

  @Column({ nullable: true })
  @IsString({ message: 'Sexo deve ser uma string' })
  public sexo!: string;

  @JoinTable()
  @OneToMany(() => Experiencia, experiencia => experiencia.candidato, {
    eager: true
  })
  public experiencias!: Experiencia[];
}

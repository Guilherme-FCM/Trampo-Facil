import { Entity, Column, OneToMany, JoinTable } from "typeorm";
import { Experiencia } from "./Experiencia";
import { Usuario } from "./Usuario";

@Entity()
export class Candidato extends Usuario {
  @Column()
  public nome_completo!: string;

  @Column()
  public cpf!: string;

  @Column()
  public data_nascimento!: Date;

  @Column({ nullable: true })
  public sexo!: string;

  @JoinTable()
  @OneToMany(() => Experiencia, experiencia => experiencia.candidato, {
    eager: true
  })
  public experiencias!: Experiencia[];
}

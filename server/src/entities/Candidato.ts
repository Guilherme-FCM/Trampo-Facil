import { Entity, Column, OneToMany, JoinTable } from "typeorm";
import { Experiencia } from "./Experiencia";
import { Usuario } from "./Usuario";
import { Endereco } from "./Endereco";

@Entity()
export class Candidato extends Usuario {
  @Column()
  public nome_completo: string;

  @Column()
  public cpf: string;

  @Column()
  public data_nascimento: Date;

  @Column({ nullable: true })
  public sexo: string;

  @JoinTable()
  @OneToMany(() => Experiencia, experiencia => experiencia.candidato, {
    eager: true
  })
  public experiencias: Experiencia[];

  constructor(
    email: string,
		senha: string,
    nome_completo: string,
    cpf: string,
    data_nascimento: Date,
    sexo: string,
		endereco: Endereco,
    experiencias: Experiencia[],
  ) {
    super(email, senha, endereco);
    
    this.nome_completo = nome_completo;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
    this.sexo = sexo;
    this.experiencias = experiencias;
  }
}

import { Entity, Column, OneToMany } from "typeorm";
import { Experiencia } from "./Experiencia";
import { Usuario } from "./Usuario";
import { Endereco } from "./Endereco";

@Entity()
export class Candidato extends Usuario {
  @Column()
  private nome_completo: string;

  @Column()
  private cpf: string;

  @Column()
  private data_nascimento: Date;

  @Column({ nullable: true })
  private sexo: string;

  @OneToMany(() => Experiencia, experiencia => experiencia.candidato)
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

  public getNomeCompleto(): string {
    return this.nome_completo;
  }

  public setNomeCompleto(nome_completo: string): void {
    this.nome_completo = nome_completo;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public setCPF(cpf: string): void {
    this.cpf = cpf;
  }

  public getDataNascimento(): Date {
    return this.data_nascimento;
  }

  public setDataNascimento(data_nascimento: Date): void {
    this.data_nascimento = data_nascimento;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public getExperiencias(): Experiencia[] {
    return this.experiencias;
  }

  public setExperiencias(experiencias: Experiencia[]): void {
    this.experiencias = experiencias;
  }
}

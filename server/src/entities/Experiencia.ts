import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Candidato } from "./Candidato";

@Entity()
export class Experiencia {
  @PrimaryGeneratedColumn()
  private id!: number;

  @Column()
  private empresa: string;
  
  @Column()
  private cargo: string;
  
  @Column()
  private descricao: string;
  
  @Column()
  private data_inicio: Date;
  
  @Column({ nullable: true })
  private data_fim?: Date;
  
  @ManyToOne(() => Candidato, candidato => candidato.experiencias)
  public candidato!: Candidato;

  @CreateDateColumn()
  private created_at!: Date;

  @UpdateDateColumn()
  private updated_at!: Date;

  constructor (
    empresa: string,
    cargo: string,
    descricao: string,
    data_inicio: Date,
    data_fim?: Date,
  ) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.descricao = descricao;
    this.data_inicio = data_inicio;
    this.data_fim = data_fim;
  }

  public getId(): number {
    return this.id;
  }

  public getEmpresa(): string {
    return this.empresa;
  }

  public setEmpresa(empresa: string): void {
    this.empresa = empresa;
  }

  public getCargo(): string {
    return this.cargo;
  }

  public setCargo(cargo: string): void {
    this.cargo = cargo;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getDataInicio(): Date {
    return this.data_inicio;
  }

  public setDataInicio(data_inicio: Date): void {
    this.data_inicio = data_inicio;
  }

  public getDataFim(): Date | undefined {
    return this.data_fim;
  }

  public setDataFim(data_fim: Date): void {
    this.data_fim = data_fim;
  }

  public getCandidato(): Candidato {
    return this.candidato;
  }
  
  public setCandidato(candidato: Candidato): void {
    this.candidato = candidato;
  }

  public getCreatedAt(): Date {
    return this.created_at;
  }

  public getUpdatedAt(): Date {
    return this.updated_at;
  }
}

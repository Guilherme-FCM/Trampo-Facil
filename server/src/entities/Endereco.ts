import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  private id!: number;

  @Column()
  private descricao: string;

  @Column()
  private bairro: string;

  @Column()
  private uf: string;

  @Column()
  private cidade: string;

  @Column()
  private cep: string;

  @CreateDateColumn()
  private created_at!: Date;

  @UpdateDateColumn()
  private updated_at!: Date;

  constructor (
    descricao: string,
    bairro: string,
    uf: string,
    cidade: string,
    cep: string,
  ) {
    this.descricao = descricao;
    this.bairro = bairro;
    this.uf = uf;
    this.cidade = cidade;
    this.cep = cep;
  }


  public getId(): number {
    return this.id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getBairro(): string {
    return this.bairro;
  }

  public setBairro(bairro: string): void {
    this.bairro = bairro;
  }

  public getUf(): string {
    return this.uf;
  }

  public setUf(uf: string): void {
    this.uf = uf;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public setCidade(cidade: string): void {
    this.cidade = cidade;
  }

  public getCep(): string {
    return this.cep;
  }

  public setCep(cep: string): void {
    this.cep = cep;
  }

  public getCreatedAt(): Date {
    return this.created_at;
  }

  public getUpdatedAt(): Date {
    return this.updated_at;
  }
}

import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Endereco extends BaseEntity {
  @Column()
  public descricao: string;

  @Column()
  public bairro: string;

  @Column()
  public uf: string;

  @Column()
  public cidade: string;

  @Column()
  public cep: string;

  constructor (
    descricao: string,
    bairro: string,
    uf: string,
    cidade: string,
    cep: string,
  ) {
    super();
  
    this.descricao = descricao;
    this.bairro = bairro;
    this.uf = uf;
    this.cidade = cidade;
    this.cep = cep;
  }
}

import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Endereco extends BaseEntity {
  @Column()
  public descricao!: string;

  @Column()
  public bairro!: string;

  @Column()
  public uf!: string;

  @Column()
  public cidade!: string;

  @Column()
  public cep!: string;
}

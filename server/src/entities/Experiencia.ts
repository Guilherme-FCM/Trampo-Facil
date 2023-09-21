import { Column, Entity, ManyToOne } from "typeorm";
import { Candidato } from "./Candidato";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Experiencia extends BaseEntity {
  @Column()
  public empresa: string;
  
  @Column()
  public cargo: string;
  
  @Column()
  public descricao: string;
  
  @Column()
  public data_inicio: Date;
  
  @Column({ nullable: true })
  public data_fim?: Date;
  
  @ManyToOne(() => Candidato, candidato => candidato.experiencias)
  public candidato!: Candidato;

  constructor (
    empresa: string,
    cargo: string,
    descricao: string,
    data_inicio: Date,
    data_fim?: Date,
  ) {
    super();
  
    this.empresa = empresa;
    this.cargo = cargo;
    this.descricao = descricao;
    this.data_inicio = data_inicio;
    this.data_fim = data_fim;
  }
}

import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { IsString } from "class-validator";

@Entity()
export class Endereco extends BaseEntity {
  @Column({ type: "text" })
  @IsString({ message: 'Descrição deve ser uma string' })
  public descricao!: string;

  @Column()
  @IsString({ message: 'Bairro deve ser uma string' })
  public bairro!: string;

  @Column()
  @IsString({ message: 'UF deve ser uma string' })
  public uf!: string;

  @Column()
  @IsString({ message: 'Cidade deve ser uma string' })
  public cidade!: string;

  @Column()
  @IsString({ message: 'CEP deve ser uma string' })
  public cep!: string;
}

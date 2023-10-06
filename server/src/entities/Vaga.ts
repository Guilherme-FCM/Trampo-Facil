import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { TipoTurno } from "./enums/TipoTurno";
import { TipoContrato } from "./enums/TipoContrato";
import { BaseEntity } from "./BaseEntity";
import { Empresa } from "./Empresa";

@Entity()
export class Vaga extends BaseEntity {
  @Column()
  public cargo!: string;
  
  @Column({ type: "text" })
  public especificacao!: string;
  
  @Column({ nullable: true })
  public remuneracao?: number;
  
  @Column({ type: "enum", enum: TipoTurno })
  public turno!: TipoTurno;
  
  @Column({ type: "enum", enum: TipoContrato })
  public contrato!: TipoContrato;

  @ManyToOne(() => Empresa, empresa => empresa.vagas)
  public empresa!: Empresa; 
}

import { Column, Entity, JoinTable, ManyToOne } from "typeorm";
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
  
  @Column({ nullable: true, type: 'float' })
  public remuneracao?: number;
  
  @Column({ type: "enum", enum: TipoTurno })
  public turno!: TipoTurno;
  
  @Column({ type: "enum", enum: TipoContrato })
  public contrato!: TipoContrato;
    
  @JoinTable()
  @ManyToOne(() => Empresa, empresa => empresa.vagas, { eager: true })
  public empresa!: Empresa; 
}

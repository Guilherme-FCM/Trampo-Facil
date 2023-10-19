import { Column, Entity, JoinTable, ManyToOne } from "typeorm";
import { TipoTurno } from "./enums/TipoTurno";
import { TipoContrato } from "./enums/TipoContrato";
import { BaseEntity } from "./BaseEntity";
import { Empresa } from "./Empresa";
import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

@Entity()
export class Vaga extends BaseEntity {
  @Column()
  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo!: string;
  
  @Column({ type: "text" })
  @IsString({ message: 'Especificacao deve ser uma string' })
  public especificacao!: string;
  
  @Column({ nullable: true, type: 'float' })
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Remunaracao deve ser um valor monetário' }
  )
  public remuneracao?: number;
  
  @Column({ type: "enum", enum: TipoTurno })
  @IsEnum(TipoTurno, { message: 'Turno deve ser uma valor válido' })
  public turno!: TipoTurno;
  
  @Column({ type: "enum", enum: TipoContrato })
  @IsEnum(TipoContrato, { message: 'Contrato deve ser uma valor válido' })
  public contrato!: TipoContrato;
    
  @JoinTable()
  @ManyToOne(() => Empresa, empresa => empresa.vagas, { eager: true })
  @IsInt({ message: 'Empresa deve ser um id existente' })
  public empresa!: Empresa; 
}

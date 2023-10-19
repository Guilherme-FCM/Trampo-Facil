import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoContrato } from "../../entities/enums/TipoContrato";
import { TipoTurno } from "../../entities/enums/TipoTurno";

export class CreateVaga {
  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo!: string;
  
  @IsString({ message: 'Especificacao deve ser uma string' })
  public especificacao!: string;
  
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Remunaracao deve ser um valor monetário' }
  )
  public remuneracao?: number;
  
  @IsEnum(TipoTurno, { message: 'Turno deve ser uma valor válido' })
  public turno!: TipoTurno;
  
  @IsEnum(TipoContrato, { message: 'Contrato deve ser uma valor válido' })
  public contrato!: TipoContrato;
    
  @IsInt({ message: 'Empresa deve ser um id existente' })
  public empresa!: number;
}

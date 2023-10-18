import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoContrato } from "../../entities/enums/TipoContrato";
import { TipoTurno } from "../../entities/enums/TipoTurno";

export class UpdateVaga {
  @IsOptional()
  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo?: string;
  
  @IsOptional()
  @IsString({ message: 'Especificacao deve ser uma string' })
  public especificacao?: string;
  
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Remunaracao deve ser um valor monetário' }
  )
  public remuneracao?: number;
  
  @IsOptional()
  @IsEnum(TipoTurno, { message: 'Turno deve ser uma valor válido' })
  public turno?: TipoTurno;
  
  @IsOptional()
  @IsEnum(TipoContrato, { message: 'Contrato deve ser uma valor válido' })
  public contrato?: TipoContrato;
}

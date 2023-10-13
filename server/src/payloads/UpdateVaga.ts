import { IsOptional } from "class-validator";
import { Empresa } from "../entities/Empresa";
import { TipoContrato } from "../entities/enums/TipoContrato";
import { TipoTurno } from "../entities/enums/TipoTurno";
import { Vaga } from "../entities/Vaga";

export class UpdateVaga extends Vaga {
  @IsOptional()
  public cargo?: string;
  
  @IsOptional()
  public especificacao?: string;
  
  @IsOptional()
  public turno?: TipoTurno;
  
  @IsOptional()
  public contrato?: TipoContrato;
    
  @IsOptional()
  public empresa?: Empresa;
}

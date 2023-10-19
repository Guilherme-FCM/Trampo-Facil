import { IsString } from "class-validator";
import { CreateUsuario } from "../usuario/CreateUsuario";

export class CreateEmpresa extends CreateUsuario {
  @IsString({ message: 'Razão social deve ser uma string' })
  public razao_social!: string;

  @IsString({ message: 'CNPJ deve ser uma string' })
  public cnpj!: string;

  @IsString({ message: 'Área de atuação deve ser uma string' })
  public area_atuacao!: string;
}

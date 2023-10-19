import { IsDateString, IsOptional, IsString } from "class-validator";
import { UpdateUsuario } from "../usuario/UpdateUsuario";

export class UpdateCandidatio extends UpdateUsuario {
  @IsOptional()
  @IsString({ message: 'Nome completo deve ser uma string' })
  public nome_completo?: string;

  @IsOptional()
  @IsString({ message: 'CPF deve ser uma string' })
  public cpf?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Data de nascimento deve ser uma data válida' })
  public data_nascimento?: Date;

  @IsOptional()
  @IsString({ message: 'Sexo deve ser uma string' })
  public sexo?: string;
}

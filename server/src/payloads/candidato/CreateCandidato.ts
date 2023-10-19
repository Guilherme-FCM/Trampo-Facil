import { IsString, IsDateString } from "class-validator";
import { CreateUsuario } from "../usuario/CreateUsuario";

export class CreateCandidato extends CreateUsuario {
  @IsString({ message: 'Nome completo deve ser uma string' })
  public nome_completo!: string;

  @IsString({ message: 'CPF deve ser uma string' })
  public cpf!: string;

  @IsDateString({}, { message: 'Data de nascimento deve ser uma data válida' })
  public data_nascimento!: Date;

  @IsString({ message: 'Sexo deve ser uma string' })
  public sexo!: string;
}

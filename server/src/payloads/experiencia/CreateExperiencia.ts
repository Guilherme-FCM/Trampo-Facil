import { IsOptional, IsString, IsInt, IsDateString } from "class-validator";

export class CreateExperiencia {
  @IsString({ message: 'Empresa deve ser uma string' })
  public empresa!: string;

  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo!: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  public descricao!: string;

  @IsDateString({}, { message: 'Data de início deve ser uma data válida' })
  public data_inicio!: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Data de fim deve ser uma data válida' })
  public data_fim?: Date;

  @IsInt({ message: 'Candidato deve ser um id existente' })
  public candidato!: number;
}

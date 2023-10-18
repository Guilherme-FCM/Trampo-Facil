import { IsOptional, IsString, IsInt, IsDateString } from "class-validator";

export class UpdateExperiencia {
  @IsOptional()
  @IsString({ message: 'Empresa deve ser uma string' })
  public empresa?: string;

  @IsOptional()
  @IsString({ message: 'Cargo deve ser uma string' })
  public cargo?: string;

  @IsOptional()
  @IsString({ message: 'Descrição deve ser uma string' })
  public descricao?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Data de início deve ser uma data válida' })
  public data_inicio?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Data de fim deve ser uma data válida' })
  public data_fim?: Date;
}
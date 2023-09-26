import { IsInt, IsObject, IsOptional, IsString } from "class-validator";

export class VagaFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsInt()
  @IsOptional()
  id_empresa?: number;

  @IsObject()
  @IsOptional()
  endereco_empresa?: {
    id?: number;
    cidade?: string;
    uf?: string;
  }
}
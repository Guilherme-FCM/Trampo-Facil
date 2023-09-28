import { IsInt, IsObject, IsOptional, IsString } from "class-validator";
import { EnderecoProps } from "./EnderecoProps";

export class VagaFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsInt()
  @IsOptional()
  id_empresa?: number;

  @IsObject()
  @IsOptional()
  endereco_empresa?: EnderecoProps
}
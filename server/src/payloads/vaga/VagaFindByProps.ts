import { IsInt, IsObject, IsOptional, IsString } from "class-validator";
import { EnderecoProps } from "../endereco/EnderecoProps";

export class VagaFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsOptional()
  id_empresa?: number;

  @IsObject()
  @IsOptional()
  endereco_empresa?: EnderecoProps
}
import { IsObject, IsOptional, IsString } from "class-validator";
import { EnderecoProps } from "./EnderecoProps";

export class CandidatoFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsObject()
  @IsOptional()
  endereco_candidato?: EnderecoProps
}
import { IsObject, IsOptional, IsString } from "class-validator";
import { EnderecoProps } from "../endereco/EnderecoProps";

export class CandidatoFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsObject()
  @IsOptional()
  endereco?: EnderecoProps
}
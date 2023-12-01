import { IsEmail, IsObject, IsOptional, IsString } from "class-validator";
import { EnderecoProps } from "../endereco/EnderecoProps";

export class CandidatoFindByProps {
  @IsString()
  @IsOptional()
  cargo?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsObject()
  @IsOptional()
  endereco?: EnderecoProps
}
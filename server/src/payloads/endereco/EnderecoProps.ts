import { IsInt, IsOptional, IsString } from "class-validator";

export class EnderecoProps {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  cidade?: string;

  @IsString()
  @IsOptional()
  uf?: string;
}
import { IsOptional, IsString } from "class-validator";

export class EmpresaFindByProps {
    @IsString()
    @IsOptional()
    razao_social?: string;

    @IsString()
    @IsOptional()
    estado?: string;
}
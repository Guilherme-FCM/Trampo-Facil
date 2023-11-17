import { IsEmail, IsOptional, IsString } from "class-validator";

export class EmpresaFindByProps {
    @IsString()
    @IsOptional()
    razao_social?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    estado?: string;
}
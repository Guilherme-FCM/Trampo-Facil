import { IsOptional, IsString } from "class-validator";
import { UpdateUsuario } from "../usuario/UpdateUsuario";

export class UpdateEmpresa extends UpdateUsuario {
    @IsOptional()
    @IsString({ message: 'Razão social deve ser uma string' })
    public razao_social?: string;

    @IsOptional()
    @IsString({ message: 'CNPJ deve ser uma string' })
    public cnpj?: string;

    @IsOptional()
    @IsString({ message: 'Área de atuação deve ser uma string' })
    public area_atuacao?: string;
}

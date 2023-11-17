import { Usuario } from "./Usuario";
import { Vaga } from "./Vaga";

export interface Empresa extends Usuario {
    id: string;
    razao_social: string;
    cnpj: string;
    area_atuacao: string;
    vagas: Vaga[];
}

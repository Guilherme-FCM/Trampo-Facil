import { Usuario } from "./Usuario";
import { Experiencia } from "./Experiencia";

export interface Candidato extends Usuario {
  id: string;
  nome_completo: string;
  cpf: string;
  data_nascimento: Date;
  sexo: string;
  experiencias: Experiencia[];
}

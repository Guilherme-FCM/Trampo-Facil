import { Usuario } from "./Usuario";
import { Experiencia } from "./Experiencia";

export interface Candidato extends Usuario {
  id: string;
  nome_completo: string;
  cpf: string;
  data_nascimento: string;
  sexo: string;
  experiencias: Experiencia[];
}

import {Usuario} from "@/types/Candidato";
import {Vaga} from "@/types/Vaga";

export interface Candidatura extends Usuario {
  candidato: string;
  vaga: string

}

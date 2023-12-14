import { Empresa } from "./Empresa";
import {Candidatura} from "@/types/Candidatura";

export interface Vaga {
  id: string;
  cargo: string;
  especificacao: string;
  remuneracao?: number;
  turno: string;
  contrato: string;
  empresa: Empresa;
  candidaturas: Candidatura
}

export interface VagaValue {
  valor: string
}

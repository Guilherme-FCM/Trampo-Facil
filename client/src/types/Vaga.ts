import { Empresa } from "./Empresa";

export interface Vaga {
  cargo: string;
  especificacao: string;
  remuneracao?: number;
  turno: string;
  contrato: string;
  empresa: Empresa;
}
import { Empresa } from "./Empresa";

export interface Vaga {
  id: string;
  cargo: string;
  especificacao: string;
  remuneracao?: number;
  turno: string;
  contrato: string;
  empresa: Empresa;
}

export interface VagaValue {
  valor: string
}

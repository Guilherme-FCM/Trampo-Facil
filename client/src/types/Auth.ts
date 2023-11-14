export type Register = Login | RegisterCandidato | RegisterEmpresa;

export interface Login {
  email: string;
  senha: string;
}

export interface RegisterCandidato {
  nome_completo: string;
  cpf: string;
  data_nascimento: string;
  sexo: string;  
}

export interface RegisterEmpresa {
  razao_social: string;
  cnpj: string;
  area_atuacao: string;
}
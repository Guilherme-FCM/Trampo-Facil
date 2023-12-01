export interface Experiencia {
  id: string;
  empresa: string;
  cargo: string;
  descricao: string;
  data_inicio: Date;
  data_fim ?: Date;
}

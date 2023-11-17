import { Endereco } from "./Endereco";

export interface Usuario {
  id: string;
	email: string;
	senha: string;
	endereco?: Endereco;
}

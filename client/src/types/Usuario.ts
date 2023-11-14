import { Endereco } from "./Endereco";

export interface Usuario {
	email: string;
	senha: string;
	endereco?: Endereco;
}

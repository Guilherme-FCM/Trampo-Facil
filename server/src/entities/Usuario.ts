import { Column, JoinColumn, OneToOne } from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";

export abstract class Usuario extends BaseEntity {
	@Column()
	protected email: string;

	@Column()
	protected senha: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
	protected endereco: Endereco;

	constructor (
		email: string,
		senha: string,
		endereco: Endereco,
	) {
		super();
	
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
	}
}

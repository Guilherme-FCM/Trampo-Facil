import { Column, JoinColumn, OneToOne } from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";

export abstract class Usuario extends BaseEntity {
	@Column()
	public email: string;

	@Column()
	public senha: string;

	@OneToOne(() => Endereco, { eager: true })
  @JoinColumn()
	public endereco: Endereco;

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

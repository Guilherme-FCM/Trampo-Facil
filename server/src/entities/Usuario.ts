import { Column, JoinColumn, OneToOne } from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";

export abstract class Usuario extends BaseEntity {
	@Column()
	public email!: string;

	@Column()
	public senha!: string;

	@OneToOne(() => Endereco, { eager: true, onDelete: 'CASCADE' })
	@JoinColumn()
	public endereco!: Endereco;
}

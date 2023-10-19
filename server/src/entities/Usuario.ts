import { Column, JoinColumn, OneToOne } from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";
import { IsNotEmpty, IsString, IsEmail, IsObject, IsOptional } from "class-validator"

export abstract class Usuario extends BaseEntity {
	@Column()
	@IsEmail()
	@IsString({ message: 'Email deve ser uma string' })
	public email!: string;

	@Column()
	@IsString({ message: 'Senha deve ser uma string' })
	@IsNotEmpty({ message: 'Senha não pode ser nula' })
	public senha!: string;

	@JoinColumn()
	@OneToOne(() => Endereco, { eager: true, onDelete: 'CASCADE' })
	@IsOptional()
	@IsObject({ message: 'Endereço deve ser válido' })
	public endereco?: Endereco;
}

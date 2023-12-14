import {Column, Index, JoinColumn, OneToOne} from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";
import { IsNotEmpty, IsString, IsEmail, IsObject, IsOptional } from "class-validator"

@Index(['email', 'senha'], { unique: true })
export abstract class Usuario extends BaseEntity {
	@Column()
	@IsEmail({}, {message: "Defina um email válido"})
	@IsString({ message: 'Email deve ser uma string' })
	@IsNotEmpty({message: "Email não pode ser branca ou nula"})
	public email!: string;

	@Column()
	@IsString({ message: 'Senha deve ser uma string' })
	@IsNotEmpty({ message: 'Senha não pode branca ou nula' })
	public senha!: string;

	@JoinColumn()
	@OneToOne(() => Endereco, { eager: true, onDelete: 'CASCADE' })
	@IsOptional()
	@IsObject({ message: 'Endereço deve ser válido' })
	public endereco?: Endereco;
}

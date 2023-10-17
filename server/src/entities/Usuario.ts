import { Column, JoinColumn, OneToOne } from "typeorm"
import { Endereco } from "./Endereco";
import { BaseEntity } from "./BaseEntity";
import {IsInt, IsNotEmpty, IsString, IsEmail } from "class-validator"

export abstract class Usuario extends BaseEntity {
	@Column()
	
	@IsEmail()
	@IsString({message: 'Email deve ser uma string'})
	public email!: string;

	@Column()
	@IsString({message: 'Senha deve ser uma string'})
	@IsNotEmpty({message: 'Senha não pode ser nula'})
	public senha!: string;

	@OneToOne(() => Endereco, { eager: true })
  	@JoinColumn()
	@IsInt({message: 'Endereço deve ser um id existente'})
	public endereco!: Endereco;
}

import { IsEmail, IsNotEmpty, IsObject, IsString } from "class-validator";
import { CreateEndereco } from "../endereco/CreateEndereco";

export abstract class CreateUsuario {
	@IsEmail()
	@IsString({ message: 'Email deve ser uma string' })
	public email!: string;

	@IsString({ message: 'Senha deve ser uma string' })
	@IsNotEmpty({ message: 'Senha não pode ser nula' })
	public senha!: string;

	@IsObject({ message: 'Endereço deve ser válido' })
	public endereco!: CreateEndereco;
}
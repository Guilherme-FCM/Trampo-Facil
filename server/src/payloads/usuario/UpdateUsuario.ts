import { IsEmail, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { CreateEndereco } from "../endereco/CreateEndereco";

export abstract class UpdateUsuario {
	@IsOptional()
	@IsEmail()
	@IsString({ message: 'Email deve ser uma string' })
	public email?: string;

	@IsOptional()
	@IsString({ message: 'Senha deve ser uma string' })
	@IsNotEmpty({ message: 'Senha não pode ser nula' })
	public senha?: string;

	@IsOptional()
	@IsObject({ message: 'Endereço deve ser válido' })
	public endereco?: CreateEndereco;
}
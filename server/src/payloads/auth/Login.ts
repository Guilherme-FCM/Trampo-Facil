import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Login {
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  senha!: string
}
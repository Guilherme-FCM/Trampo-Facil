import { IsString } from "class-validator";

export class CreateEndereco {
  @IsString({ message: 'Descrição deve ser uma string' })
  public descricao!: string;

  @IsString({ message: 'Bairro deve ser uma string' })
  public bairro!: string;

  @IsString({ message: 'UF deve ser uma string' })
  public uf!: string;

  @IsString({ message: 'Cidade deve ser uma string' })
  public cidade!: string;

  @IsString({ message: 'CEP deve ser uma string' })
  public cep!: string;
}
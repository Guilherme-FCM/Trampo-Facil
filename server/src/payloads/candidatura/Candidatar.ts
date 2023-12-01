import {Candidato} from "../../entities/Candidato";
import {Vaga} from "../../entities/Vaga";
import {IsInt} from "class-validator";


export class Candidatar{
    @IsInt({ message: 'Candidato deve ser um id existente' })
    public candidato!: Candidato;

    @IsInt({ message: 'Vaga deve ser um id existente' })
    public vaga!: Vaga;
}
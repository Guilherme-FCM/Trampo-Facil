import {Entity, ManyToOne, JoinColumn, Column, Index} from 'typeorm';
import { Candidato } from './Candidato';
import { Vaga } from './Vaga';
import {IsInt} from "class-validator";
import {BaseEntity} from "./BaseEntity";


@Entity()
@Index(['candidato', 'vaga'], { unique: true },)
export class Candidatura extends BaseEntity {
    @ManyToOne(() => Candidato, candidato => candidato.candidaturas, { eager: true })
    @IsInt({ message: 'Candidato deve ser um id existente' })
    public candidato!: Candidato;

    @ManyToOne(() => Vaga, vaga => vaga.candidaturas, { eager: true })
    @IsInt({ message: 'Vaga deve ser um id existente' })
    public vaga!: Vaga;
}
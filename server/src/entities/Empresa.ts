import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import { Usuario } from "./Usuario";
import { Vaga } from "./Vaga";
import { IsString } from "class-validator";

@Entity()
export class Empresa extends Usuario {
    @Column()
    @IsString({ message: 'Razão social deve ser uma string' })
    public razao_social!: string;

    @Column()
    @IsString({message: 'CNPJ deve ser uma string'})
    public cnpj!: string;

    @Column({ type: "text", nullable: true })
    @IsString({ message: 'Área de atuação deve ser uma string' })
    public area_atuacao!: string;

    @JoinTable()
    @OneToMany(() => Vaga, vaga => vaga.empresa, {
        lazy: true
    })
    public vagas!: Vaga[];
}

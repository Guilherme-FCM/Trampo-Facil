import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import { Usuario } from "./Usuario";
import { Vaga } from "./Vaga";

@Entity()
export class Empresa extends Usuario {
    @Column()
    public razao_social!: string;
    
    @Column()
    public cnpj!: string;
    
    @Column({ nullable: true })
    public areaAtuacao!: string;

    @JoinTable()
    @OneToMany(() => Vaga, vaga => vaga.empresa, {
        lazy: true
    })
    public vagas!: Vaga[];
}

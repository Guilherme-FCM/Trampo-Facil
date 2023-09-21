import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import { Usuario } from "./Usuario";
import { Vaga } from "./Vaga";
import { Endereco } from "./Endereco";

@Entity()
export class Empresa extends Usuario {
    @Column()
    public razao_social: string;
    
    @Column()
    public cnpj: string;
    
    @Column({nullable:true})
    public areaAtuacao: string;

    @JoinTable()
    @OneToMany(() => Vaga, vaga => vaga.empresa, {
        eager:true
    })
    public vagas: Vaga[];

    constructor(
        email: string,
        senha: string,
        endereco: Endereco,
        razao_social: string,
        cnpj: string,
        areaAtuacao: string,
        vagas: Vaga[],
    ){
        super(email, senha, endereco);
        this.razao_social = razao_social;
        this.cnpj = cnpj;
        this.areaAtuacao = areaAtuacao;
        this.vagas = vagas
    }
}

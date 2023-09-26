import { EmpresaRepository } from "../repositories/EmpresaRepository";

type FindByProps={
    razao_social?: string,
    estado?: string
}

export class EmpresaService {
    constructor(
        private readonly repository = new EmpresaRepository()
    ){}
    public findBy(params: FindByProps){
        try {
            return this.repository.findBy({
                razao_social:params?.razao_social,
                endereco:{
                    uf:params?.estado
                }
            })
        } catch (error) {
            return Error("Contate o suporte técnico!")
        }
    }
}
import { CandidatoRepository } from "../repositories/CandidatoRepository";

type FindByProps={
    cargo?: string,
    endereco_candidato?:{
        id?:number,
        cidade?:string,
        uf?:string
    }
}

export class CandidatoService{
    constructor(
        private readonly repository = new CandidatoRepository()
    ) {}
    public findBy(params: FindByProps){
        try {
            return this.repository.findBy({
                experiencias: [{
                    cargo: params.cargo
                }],
                endereco:{
                    id:params.endereco_candidato?.id,
                    cidade:params.endereco_candidato?.cidade,
                    uf:params.endereco_candidato?.uf
                  } 
              })
        } catch (error) {
            return Error("Contate o suporte técnico!")
        }
    }
}
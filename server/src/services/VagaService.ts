import { VagaRepository } from "../repositories/VagaRepository";

type FindByProps={
    cargo?: string,
    id_empresa?: number,
    endereco_empresa?:{
        id?:number,
        cidade?:string,
        uf?:string
    }
}

export class VagaService {
    constructor(
        private readonly repository = new VagaRepository()
    ){}
    public findBy(params: FindByProps){
        try {
            return this.repository.findBy({
                cargo:params.cargo,
                empresa:{
                  id:params.id_empresa,
                  endereco:{
                    id:params.endereco_empresa?.id,
                    cidade:params.endereco_empresa?.cidade,
                    uf:params.endereco_empresa?.uf
                  } 
                }
              })
        } catch (error) {
            return Error("Contate o suporte técnico!")
        }
    }
}
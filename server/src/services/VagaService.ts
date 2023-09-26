import { VagaRepository } from "../repositories/VagaRepository";
import { VagaFindByProps } from "../payloads/VagaFindByProps";
import { validate } from "../utils/validate";

export class VagaService {
    constructor (
        private readonly repository = new VagaRepository()
    ) {}
    
    public async findBy(params: VagaFindByProps) {
        await validate(params, VagaFindByProps);

        return this.repository.findBy({
            cargo: params.cargo,
            empresa: {
                id: params.id_empresa,
                endereco: {
                    id: params.endereco_empresa?.id,
                    cidade: params.endereco_empresa?.cidade,
                    uf: params.endereco_empresa?.uf
                } 
            }
        })
    }
}
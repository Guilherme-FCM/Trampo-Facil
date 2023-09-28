import { VagaRepository } from "../repositories/VagaRepository";
import { VagaFindByProps } from "../payloads/VagaFindByProps";
import { validate } from "../utils/validate";
import { Vaga } from "../entities/Vaga";
import { ServiceInterface } from "./ServiceInterface";

export class VagaService implements ServiceInterface {
    constructor (
        private readonly repository = new VagaRepository()
    ) {}
    
    public async create(data: Vaga) {
        await validate(data, Vaga);
        return this.repository.create(data);
    }

    public async findAll() {
        return this.repository.findAll();
    }

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

    public async findById(id: number) {
        return this.repository.findById(id);
    }

    public async update(id: number, data: Vaga) {
        await validate(data, Vaga);
        return this.repository.update(id, data);
    }

    public async delete(id: number) {
        return this.repository.delete(id);
    }
}
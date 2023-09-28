import { Candidato } from "../entities/Candidato";
import { CandidatoFindByProps } from "../payloads/CandidatoFindByProps";
import { CandidatoRepository } from "../repositories/CandidatoRepository";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";

export class CandidatoService implements ServiceInterface {
    constructor (
        private readonly repository = new CandidatoRepository(),
        private readonly endereco = new EnderecoRepository(),
    ) {}
    
    public async create(data: Candidato) {
        await validate(data, Candidato);

        await this.endereco.create(data.endereco);
        return this.repository.create(data);
    }

    public async findAll() {
        return this.repository.findAll();
    }
    
    public findBy(params: CandidatoFindByProps) {
        return this.repository.findBy({
            experiencias: [{
                cargo: params.cargo
            }],
            endereco: {
                id: params.endereco_candidato?.id,
                cidade: params.endereco_candidato?.cidade,
                uf: params.endereco_candidato?.uf
            }
        });
    }

    public async findById(id: number) {
        return this.repository.findById(id);
    }

    public async update(id: number, data: Candidato) {
        await validate(data, Candidato);
        return this.repository.update(id, data);
    }

    public async delete(id: number) {
        return this.repository.delete(id);
    }
}
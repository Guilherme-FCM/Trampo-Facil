import { Candidato } from "../entities/Candidato";
import { CandidatoFindByProps } from "../payloads/CandidatoFindByProps";
import { CandidatoRepository } from "../repositories/CandidatoRepository";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { ServiceInterface } from "./ServiceInterface";
import { Optional } from "../utils/Optional";
import { validate } from "../utils/validate";

export class CandidatoService extends CandidatoRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: Candidato) {
        const data = validate(params, Candidato);
        await this.endereco.create(data.endereco);
        return super.create(data);
    }
    
    public async findBy(params: CandidatoFindByProps) {
        const data = validate(params, CandidatoFindByProps);
        return super.findBy({
            experiencias: [{
                cargo: data.cargo
            }],
            endereco: {
                id: data.endereco?.id,
                cidade: data.endereco?.cidade,
                uf: data.endereco?.uf
            }
        });
    }

    public async update(id: number, params: Optional<Candidato>) {
        const data = validate(params, Candidato);
        return super.update(id, data);
    }
}

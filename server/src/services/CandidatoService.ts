import { Candidato } from "../entities/Candidato";
import { CandidatoFindByProps } from "../payloads/candidato/CandidatoFindByProps";
import { CandidatoRepository } from "../repositories/CandidatoRepository";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { ServiceInterface } from "./ServiceInterface";
import { validate } from "../utils/validate";
import { Endereco } from "../entities/Endereco";

export class CandidatoService extends CandidatoRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: Candidato) {
        const data = validate(params, Candidato);

        if (data.endereco)
            await this.endereco.create(validate(data.endereco, Endereco));

        return super.create(data);
    }
    
    public async findBy(params: CandidatoFindByProps) {
        const data = validate(params, CandidatoFindByProps);
        return super.findBy(data as Partial<Candidato>);
    }

    public async update(id: any, params: Candidato) {
        const data = validate(params, Candidato);
        
        if (data.endereco)
            await this.endereco.update(data.endereco.id, validate(data.endereco, Endereco));

        return super.update(id, data);
    }
}

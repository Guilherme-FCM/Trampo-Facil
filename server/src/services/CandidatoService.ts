import { Candidato } from "../entities/Candidato";
import { CandidatoFindByProps } from "../payloads/candidato/CandidatoFindByProps";
import { CandidatoRepository } from "../repositories/CandidatoRepository";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { ServiceInterface } from "./ServiceInterface";
import { validate } from "../utils/validate";
import { UpdateCandidatio } from "../payloads/candidato/UpdateCandidato";
import { CreateCandidato } from "../payloads/candidato/CreateCandidato";

export class CandidatoService extends CandidatoRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: CreateCandidato) {
        const data = validate(params, CreateCandidato);
        await this.endereco.create(data.endereco);
        return super.create(data as Candidato);
    }
    
    public async findBy(params: CandidatoFindByProps) {
        const data = validate(params, CandidatoFindByProps);
        const findByOptions = {
            experiencias: [] as { cargo: string }[],
            endereco: {
                id: data.endereco?.id,
                cidade: data.endereco?.cidade,
                uf: data.endereco?.uf
            }
        }
        
        if (data.cargo) findByOptions.experiencias = [{ cargo: 'undefined' }]
        return super.findBy(findByOptions);
    }

    public async update(id: any, params: UpdateCandidatio) {
        const data = validate(params, UpdateCandidatio);
        return super.update(id, data);
    }
}

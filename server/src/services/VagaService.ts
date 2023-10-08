import { VagaRepository } from "../repositories/VagaRepository";
import { VagaFindByProps } from "../payloads/VagaFindByProps";
import { validate } from "../utils/validate";
import { Vaga } from "../entities/Vaga";
import { ServiceInterface } from "./ServiceInterface";
import { Optional } from "../utils/Optional";

export class VagaService extends VagaRepository implements ServiceInterface {
    public async create(params: Vaga) {
        const data = validate(params, Vaga);
        return super.create(data);
    }

    public async findBy(params: VagaFindByProps) {
        const data = validate(params, VagaFindByProps);
        return super.findBy({
            cargo: data.cargo,
            empresa: {
                id: data.id_empresa,
                endereco: {
                    id: data.endereco_empresa?.id,
                    cidade: data.endereco_empresa?.cidade,
                    uf: data.endereco_empresa?.uf
                } 
            }
        })
    }

    public async update(id: any, params: Optional<Vaga>) {
        const data = validate(params, Vaga);
        return super.update(id, data);
    }
}
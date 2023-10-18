import { VagaRepository } from "../repositories/VagaRepository";
import { VagaFindByProps } from "../payloads/vaga/VagaFindByProps";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";
import { EmpresaService } from "./EmpresaService";
import { NotFoundException } from "../exceptions/NotFoundException";
import { UpdateVaga } from "../payloads/vaga/UpdateVaga";
import { CreateVaga } from "../payloads/vaga/CreateVaga";

export class VagaService extends VagaRepository implements ServiceInterface {
    private readonly empresa = new EmpresaService();

    public async create(params: CreateVaga) {
        const data = validate(params, CreateVaga);

        const empresa = await this.empresa.findById(data.empresa);
        if (!empresa) throw new NotFoundException('Empresa não encontrada');
        
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

    public async update(id: any, params: UpdateVaga) {
        const data = validate(params, UpdateVaga);
        return super.update(id, data);
    }
}
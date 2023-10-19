import { VagaRepository } from "../repositories/VagaRepository";
import { VagaFindByProps } from "../payloads/vaga/VagaFindByProps";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";
import { EmpresaService } from "./EmpresaService";
import { NotFoundException } from "../exceptions/NotFoundException";
import { Vaga } from "../entities/Vaga";

export class VagaService extends VagaRepository implements ServiceInterface {

    private async validateAndGetEmpresa(empresaId: number): Promise<Boolean> {
        const empresaService = new EmpresaService();
        const empresa = await empresaService.findById(empresaId);
        if (!empresa) throw new NotFoundException('Empresa não encontrada');
        return true;
    }

    public async create(params: Vaga) {
        const data = validate(params, Vaga);
        await this.validateAndGetEmpresa(Number(data.empresa));
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

    public async update(id: any, params: Vaga) {
        const data = validate(params, Vaga);
        await this.validateAndGetEmpresa(Number(data.empresa));
        return super.update(id, data);
    }
}
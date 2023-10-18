import { EmpresaRepository } from "../repositories/EmpresaRepository";
import { ServiceInterface } from "./ServiceInterface";
import { Empresa } from "../entities/Empresa";
import { validate } from "../utils/validate";
import { EmpresaFindByProps } from "../payloads/empresa/EmpresaFindByProps";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { UpdateEmpresa } from "../payloads/empresa/UpdateEmpresa";
import { CreateEmpresa } from "../payloads/empresa/CreateEmpresa";

export class EmpresaService extends EmpresaRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: CreateEmpresa) {
        const data = validate(params, CreateEmpresa);
        await this.endereco.create(data.endereco);
        return super.create(params as Empresa);
    }

    public async findBy(params: EmpresaFindByProps) {
        const data = validate(params, EmpresaFindByProps);
        return super.findBy({
            razao_social: data?.razao_social,
            endereco: {
                uf: data?.estado
            }
        });
    }

    public async update(id: any, params: UpdateEmpresa) {
        const data = validate(params, UpdateEmpresa);
        return super.update(id, data);
    }

}
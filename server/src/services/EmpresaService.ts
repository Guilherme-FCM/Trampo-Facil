import { EmpresaRepository } from "../repositories/EmpresaRepository";
import { ServiceInterface } from "./ServiceInterface";
import { Empresa } from "../entities/Empresa";
import { validate } from "../utils/validate";
import { EmpresaFindByProps } from "../payloads/empresa/EmpresaFindByProps";
import { EnderecoRepository } from "../repositories/EnderecoRepository";

export class EmpresaService extends EmpresaRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: Empresa) {
        const data = validate(params, Empresa);
        
        if (data.endereco)
            await this.endereco.create(data.endereco);
        
        return super.create(data);
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

    public async update(id: any, params: Empresa) {
        const data = validate(params, Empresa);

        if (data.endereco)
            await this.endereco.update(data.endereco.id, data.endereco);

        return super.update(id, data);
    }

}
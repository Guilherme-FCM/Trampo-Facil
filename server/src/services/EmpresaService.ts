import { EmpresaRepository } from "../repositories/EmpresaRepository";
import { ServiceInterface } from "./ServiceInterface";
import { Empresa } from "../entities/Empresa";
import { validate } from "../utils/validate";
import { EmpresaFindByProps } from "../payloads/empresa/EmpresaFindByProps";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { Endereco } from "../entities/Endereco";

export class EmpresaService extends EmpresaRepository implements ServiceInterface {
    private readonly endereco = new EnderecoRepository();
    
    public async create(params: Empresa) {
        const data = validate(params, Empresa);
        
        if (data.endereco)
            await this.endereco.create(validate(data.endereco, Endereco));
        
        return super.create(data);
    }

    public async findBy(params: EmpresaFindByProps) {
        const data = validate(params, EmpresaFindByProps);
        return super.findBy({
            razao_social: data?.razao_social,
            endereco: {
                uf: data?.estado
            },
            email: params.email,
        });
    }

    public async update(id: any, params: Empresa) {
        delete params.vagas;
        const data = validate(params, Empresa);

        if (data.endereco?.id){
            await this.endereco.update(data.endereco.id, validate(data.endereco, Endereco));
        } else if(data.endereco?.cep){
            await this.endereco.create(data.endereco),validate(data.endereco, Endereco);
        }

        return super.update(id, data);
    }

}
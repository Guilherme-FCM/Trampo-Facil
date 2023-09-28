import { EmpresaRepository } from "../repositories/EmpresaRepository";
import { ServiceInterface } from "./ServiceInterface";
import { Empresa } from "../entities/Empresa";
import { validate } from "../utils/validate";
import { EmpresaFindByProps } from "../payloads/EmpresaFindByProps";
import { EnderecoRepository } from "../repositories/EnderecoRepository";

export class EmpresaService implements ServiceInterface {
    constructor (
        private readonly repository = new EmpresaRepository(),
        private readonly endereco = new EnderecoRepository(),
    ) {}
    
    public async create(data: Empresa) {
        await validate(data, Empresa);

        await this.endereco.create(data.endereco);
        return this.repository.create(data);
    }

    public async findAll() {
        return this.repository.findAll();
    }

    public async findBy(params: EmpresaFindByProps) {
        await validate(params, EmpresaFindByProps);

        return this.repository.findBy({
            razao_social: params?.razao_social,
            endereco: {
                uf: params?.estado
            }
        });
    }
    
    public async findById(id: number) {
        return this.repository.findById(id);
    }

    public async update(id: number, data: Empresa) {
        await validate(data, Empresa);
        return this.repository.update(id, data);
    }

    public async delete(id: number) {
        return this.repository.delete(id);
    }
}
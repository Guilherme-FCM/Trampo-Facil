import { ExperienciaRepository } from "../repositories/ExperienciaRepository";
import { validate } from "../utils/validate";
import { Experiencia } from "../entities/Experiencia";
import { ServiceInterface } from "./ServiceInterface";

export class ExperienciaService implements ServiceInterface {
    constructor (
        private readonly repository = new ExperienciaRepository()
    ) {}
    
    public async create(data: Experiencia) {
        await validate(data, Experiencia);
        return this.repository.create(data);
    }

    public async findAll() {
        return this.repository.findAll();
    }

    public async findBy(params: Experiencia) {
        await validate(params, Experiencia);
        return this.repository.findBy(params)
    }

    public async findById(id: number) {
        return this.repository.findById(id);
    }

    public async update(id: number, data: Experiencia) {
        await validate(data, Experiencia);
        return this.repository.update(id, data);
    }

    public async delete(id: number) {
        return this.repository.delete(id);
    }
}
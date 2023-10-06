import { ExperienciaRepository } from "../repositories/ExperienciaRepository";
import { validate } from "../utils/validate";
import { Experiencia } from "../entities/Experiencia";
import { ServiceInterface } from "./ServiceInterface";
import { Optional } from "../utils/Optional";

export class ExperienciaService extends ExperienciaRepository implements ServiceInterface {
    public async create(params: Experiencia) {
        const data = validate(params, Experiencia);
        return super.create(data);
    }

    public async findBy(params: Optional<Experiencia>) {
        const data = validate(params, Experiencia);
        return super.findBy(data)
    }

    public async update(id: number, params: Optional<Experiencia>) {
        const data = validate(params, Experiencia);
        return super.update(id, data);
    }
}
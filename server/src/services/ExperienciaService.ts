import { ExperienciaRepository } from "../repositories/ExperienciaRepository";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";
import { Experiencia } from "../entities/Experiencia";

export class ExperienciaService extends ExperienciaRepository implements ServiceInterface {
    public async create(params: Experiencia) {
        const data = validate(params, Experiencia);
        return super.create(data);
    }

    public async update(id: any, params: Experiencia) {
        const data = validate(params, Experiencia);
        return super.update(id, data);
    }
}
import { ExperienciaRepository } from "../repositories/ExperienciaRepository";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";
import { CreateExperiencia } from "../payloads/experiencia/CreateExperiencia";
import { UpdateExperiencia } from "../payloads/experiencia/UpdateExperiencia";

export class ExperienciaService extends ExperienciaRepository implements ServiceInterface {
    public async create(params: CreateExperiencia) {
        const data = validate(params, CreateExperiencia);
        return super.create(data);
    }

    public async update(id: any, params: UpdateExperiencia) {
        const data = validate(params, UpdateExperiencia);
        return super.update(id, data);
    }
}
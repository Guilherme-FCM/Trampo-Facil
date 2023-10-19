import { ExperienciaRepository } from "../repositories/ExperienciaRepository";
import { validate } from "../utils/validate";
import { ServiceInterface } from "./ServiceInterface";
import { Experiencia } from "../entities/Experiencia";
import { NotFoundException } from "../exceptions/NotFoundException";
import { CandidatoService } from "./CandidatoService";

export class ExperienciaService extends ExperienciaRepository implements ServiceInterface {

    private async validateAndGetCandidato(candidatoId: number): Promise<Boolean> {
        const candidatoService = new CandidatoService();
        const candidato = await candidatoService.findById(candidatoId);
        if (!candidato) {
            throw new NotFoundException("Usuário não encontrado!");
        }
        return true;
    }

    public async create(params: Experiencia) {
        const data = validate(params, Experiencia);
        await this.validateAndGetCandidato(Number(data.candidato));
        return super.create(data);
    }

    public async update(id: any, params: Experiencia) {
        const data = validate(params, Experiencia);
        await this.validateAndGetCandidato(Number(data.candidato));
        return super.update(id, data);
    }
}
import {ServiceInterface} from "./ServiceInterface";
import {validate} from "../utils/validate";
import {CandidaturaRepository} from "../repositories/CandidaturaRepository";
import {Candidatura} from "../entities/Candidatura";

export class CandidaturaService extends CandidaturaRepository implements ServiceInterface {
    public async create(params: {}) {
        const data = validate(params, Candidatura);
        return super.create(data);
    }

    public async update(id: any, params: Candidatura) {
        const data = validate(params, Candidatura);
        return super.update(id, data);
    }
}
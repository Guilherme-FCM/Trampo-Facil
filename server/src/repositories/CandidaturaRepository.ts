import { BaseRepository } from "./BaseRepository";
import {Candidatura} from "../entities/Candidatura";

export class CandidaturaRepository extends BaseRepository<Candidatura> {
    constructor() { super(Candidatura); }
}

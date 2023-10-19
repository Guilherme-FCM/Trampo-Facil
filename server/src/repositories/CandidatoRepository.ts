import { Candidato } from "../entities/Candidato";
import { BaseRepository } from "./BaseRepository";

export class CandidatoRepository extends BaseRepository<Candidato> {
  constructor() { super(Candidato); }
}

import { Experiencia } from "../entities/Experiencia";
import { BaseRepository } from "./BaseRepository";

export class ExperienciaRepository extends BaseRepository<Experiencia> {
  constructor() { super(Experiencia) }
}
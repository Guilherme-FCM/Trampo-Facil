import { Vaga } from "../entities/Vaga";
import { BaseRepository } from "./BaseRepository";

export class VagaRepository extends BaseRepository<Vaga> {
  constructor() { super(Vaga) }
}
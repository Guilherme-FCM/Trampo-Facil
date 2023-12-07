import { Vaga } from "../entities/Vaga";
import { BaseRepository } from "./BaseRepository";

export class VagaRepository extends BaseRepository<Vaga> {
  constructor() { super(Vaga) }

  async findById(id: any): Promise<Vaga | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["candidaturas"],
    });
  }
}
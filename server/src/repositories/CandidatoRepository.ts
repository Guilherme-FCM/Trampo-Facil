import { Candidato } from "../entities/Candidato";
import { BaseRepository } from "./BaseRepository";
import { EnderecoRepository } from "./EnderecoRepository";

export class CandidatoRepository extends BaseRepository<Candidato> {
  constructor(
    private readonly enderecoRepository = new EnderecoRepository(),
  ) { super("Candidato") }

  async create(data: Candidato): Promise<Candidato> {
    await this.enderecoRepository.create(data.endereco);
    return this.repository.save(data);
  }
}

import { Empresa } from "../entities/Empresa";
import { BaseRepository } from "./BaseRepository";
import { EnderecoRepository } from "./EnderecoRepository";

export class EmpresaRepository extends BaseRepository<Empresa> {
  constructor(private readonly enderecoRepository = new EnderecoRepository(),
  ) { super("Empresa") }

  async create(data: Empresa): Promise<Empresa> {
      await this.enderecoRepository.create(data.endereco);
      return this.repository.save(data);
  }
}
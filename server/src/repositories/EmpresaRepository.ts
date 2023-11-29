import { Empresa } from "../entities/Empresa";
import { BaseRepository } from "./BaseRepository";

export class EmpresaRepository extends BaseRepository<Empresa> {
  constructor() { super(Empresa) }

  async findById(id: any): Promise<Empresa | null> {
    const empresa = await this.repository.findOneBy({ id });
    await empresa?.vagas;
    return { ...empresa, vagas: empresa.__vagas__ };
  }
}
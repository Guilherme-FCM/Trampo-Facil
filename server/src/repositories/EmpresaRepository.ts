import { Empresa } from "../entities/Empresa";
import { BaseRepository } from "./BaseRepository";

export class EmpresaRepository extends BaseRepository<Empresa> {
  constructor() { super("Empresa") }
}
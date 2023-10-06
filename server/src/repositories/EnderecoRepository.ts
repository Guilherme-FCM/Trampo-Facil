import { Endereco } from "../entities/Endereco";
import { BaseRepository } from "./BaseRepository";

export class EnderecoRepository extends BaseRepository<Endereco> {
  constructor() { super(Endereco) }
}
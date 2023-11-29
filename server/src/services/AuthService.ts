import { Candidato } from "../entities/Candidato";
import { Empresa } from "../entities/Empresa";
import { UnprocessableEntityException } from "../exceptions/UnprocessableEntityException";
import { Login } from "../payloads/auth/Login";
import { CandidatoRepository } from "../repositories/CandidatoRepository";
import { EmpresaRepository } from "../repositories/EmpresaRepository";
import { validate } from "../utils/validate";

export class AuthService {
  private readonly candidato = new CandidatoRepository();
  private readonly empresa = new EmpresaRepository();

  public async login(params: Login) {
    const { email, senha } = validate(params, Login);

    const [candidato] = await this.candidato.findBy({ email });
    const [empresa] = await this.empresa.findBy({ email });
    const user = candidato || empresa
    
    if (!user || user.senha != senha)
      throw new UnprocessableEntityException('Usuário não encontrado ou senha incorreta');

    return {
      user: this.getUserData(user),
      token: user.id,
    }
  }

  public async logout() {
    return true;
  }

  private getUserData(user: Candidato | Empresa) {
    const type = user instanceof Candidato ? 1 : 2;
    return {
      id: user.id,
      name: user.nome_completo || user.razao_social,
      email: user.email,
      type,
    }
  }
}
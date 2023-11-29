import { Router } from "express"
import { VagaController } from "../controllers/VagaController"
import { EmpresaController } from "../controllers/EmpresaController";
import { CandidatoController } from "../controllers/CandidatoController";
import { ExperienciaController } from "../controllers/ExperienciaController";
import { AuthController } from "../controllers/AuthController";

const routes = Router();

// AUTENTICAÇÃO
routes.post('/login', AuthController.login);
routes.post('/logout', AuthController.logout);

// VAGAS
routes.get('/vagas', VagaController.index);
routes.get('/vagas/findByValue', VagaController.findByValue);
routes.get('/vagas/:id', VagaController.getById);
routes.post('/vagas', VagaController.create);
routes.put('/vagas/:id', VagaController.update);
routes.delete('/vagas/:id', VagaController.delete);

// EMPRESAS
routes.get('/empresas', EmpresaController.index);
routes.get('/empresas/:id', EmpresaController.getById);
routes.post('/empresas', EmpresaController.create);
routes.put('/empresas/:id', EmpresaController.update);
routes.delete('/empresas/:id', EmpresaController.delete);

// CANDIDATOS
routes.get('/candidatos', CandidatoController.index);
routes.get('/candidatos/:id', CandidatoController.getById);
routes.post('/candidatos', CandidatoController.create);
routes.put('/candidatos/:id', CandidatoController.update);
routes.delete('/candidatos/:id', CandidatoController.delete);

// EXPERIENCIAS
routes.get('/experiencias', ExperienciaController.index);
routes.get('/experiencias/:id', ExperienciaController.getById);
routes.post('/experiencias', ExperienciaController.create);
routes.put('/experiencias/:id', ExperienciaController.update);
routes.delete('/experiencias/:id', ExperienciaController.delete);

export default routes
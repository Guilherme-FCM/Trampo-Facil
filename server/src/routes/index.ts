import { Router } from "express"
import { VagaController } from "../controllers/VagaController"

const routes = Router();

// VAGAS
routes.get('/vagas', VagaController.index);
routes.get('/vagas/:id', VagaController.getById);
routes.post('/vagas', VagaController.create);
routes.put('/vagas/:id', VagaController.update);
routes.delete('/vagas/:id', VagaController.delete);

export default routes
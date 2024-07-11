import express, { Router } from 'express';
import { UserController } from '../../aplication/controllers/UserController';
import { CreateUser } from '../../domain/usecases/CreateUser';
import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository';

const router: Router = express.Router();
const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUser(userRepository);
const userController = new UserController(createUserUseCase, userRepository);

// Rota para criar usuário
router.post('/', userController.createUserHandler);

// Rota para listar todos os usuários
router.get('/', userController.getAllUsersHandler);

export default router;

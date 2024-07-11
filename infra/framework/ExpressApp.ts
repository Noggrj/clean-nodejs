// src/infrastructure/framework/ExpressApp.ts
import express from 'express';
import { UserController } from '../../aplication/controllers/UserController';
import { CreateUser } from '../../domain/usecases/CreateUser';
import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository';

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUser(userRepository);
const userController = new UserController(createUserUseCase);

app.post('/users', userController.createUserHandler);

export default app;

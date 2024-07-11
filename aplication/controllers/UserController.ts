import { Request, Response } from "express";
import { CreateUser } from "../../domain/usecases/CreateUser";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserController {
  constructor(
    private createUser: CreateUser,
    private userRepository: UserRepository
  ) {}

  createUserHandler = (req: Request, res: Response): Response => {
    const { name, email } = req.body;
    const user = this.createUser.execute(name, email);
    return res.status(201).json(user);
  };

  getAllUsersHandler = (req: Request, res: Response): Response => {
    const users = this.userRepository.findAll();
    return res.status(200).json(users);
  };
}

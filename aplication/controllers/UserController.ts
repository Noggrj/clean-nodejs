import { Request, Response } from "express";
import { CreateUser } from "../../domain/usecases/CreateUser";

export class UserController {
  constructor(private createUser: CreateUser) {}

  createUserHandler = (req: Request, res: Response): Response => {
    const { name, email } = req.body;
    const user = this.createUser.execute(name, email);
    return res.status(201).json(user);
  };
}

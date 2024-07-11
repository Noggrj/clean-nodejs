// src/application/controllers/UserController.ts
import { CreateUser } from "../../domain/usecases/CreateUser";
import { Request, Response } from "express";

export class UserController {
  constructor(private createUser: CreateUser) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const user = await this.createUser.execute(name, email);
    return res.status(201).json(user);
  }
}

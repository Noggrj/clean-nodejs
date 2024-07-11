// src/domain/usecases/CreateUser.ts
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  execute(name: string, email: string): User {
    const user = new User(0, name, email);
    return this.userRepository.save(user);
  }
}

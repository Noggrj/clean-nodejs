// src/domain/repositories/UserRepository.ts
import { User } from "../entities/User";

export interface UserRepository {
  save(user: User): User;
  findAll(): User[];
}

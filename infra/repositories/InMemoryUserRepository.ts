import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];
  private currentId: number = 1;

  save(user: User): User {
    user.id = this.currentId++;
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}

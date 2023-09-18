import { Injectable, NotFoundException } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [];

  createUser(user: CreateUserDto): UserInterface {
    const newUser = { id: Date.now().toString(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): UserInterface[] {
    return this.users;
  }

  getUserById(id: string): UserInterface {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  updateUser(id: string, user: UpdateUserDto): UserInterface {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(index, 1);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDto): UserInterface {
    return this.usersService.createUser(user);
  }

  @Get()
  findAll(): UserInterface[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserInterface {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto): UserInterface {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.usersService.deleteUser(id);
  }
}

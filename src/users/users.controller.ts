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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto, toUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.createUser(createUserDto);
    return toUserDto(user);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.getAllUsers();
    return users.map((user) => toUserDto(user));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.getUserById(id);
    return toUserDto(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDto> {
    const user = await this.usersService.updateUser(id, updateUserDto);
    return toUserDto(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}

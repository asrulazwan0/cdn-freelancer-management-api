import { IsNotEmpty, IsString, IsEmail, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsArray()
  readonly skillsets: string[];

  @IsNotEmpty()
  @IsString()
  readonly hobby: string;
}

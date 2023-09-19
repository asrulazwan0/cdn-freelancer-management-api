import { User } from '../schemas/user.schema';

export class UserDto {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  skillsets: string[];
  hobby: string;
}

export function toUserDto(user: User): UserDto {
  const { _id, username, email, phoneNumber, skillsets, hobby } = user;
  return { id: _id, username, email, phoneNumber, skillsets, hobby };
}

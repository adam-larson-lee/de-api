import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersFactory {
  getNewUser(email: string, password: string): User {
    const user = new User();
    user.email = email;
    user.password = password;
    return user;
  }
}
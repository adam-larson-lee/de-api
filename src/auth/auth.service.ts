import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.passwordMatches(password)) {
      return user;
    }
    return null;
  }

  async getToken(email: string) {
    const user = await this.usersService.findByEmail(email);
    const payload = { email: user.email, userId: user.userId };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
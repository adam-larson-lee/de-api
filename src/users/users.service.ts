import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(email: string, password: string) {
    const user = new User();
    user.email = email;
    user.password = password;
    return this.usersRepository.create(user);
  }
  
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findByUserId(userId: number): Promise<User> {
    return this.usersRepository.findOne({
      userId,
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      email,
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
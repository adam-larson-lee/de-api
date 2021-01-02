import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersFactory } from './users.factory';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersFactory: UsersFactory,
  ) {}

  toDto(user: User): UserDto {
    return new UserDto(user.userId);
  }

  create(email: string, password: string) {
    const user = this.usersFactory.getNewUser(email, password);
    return this
      .usersRepository
      .save(user);
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
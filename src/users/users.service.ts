import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdDto } from '../id/id.dto'
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersFactory } from './users.factory';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersFactory: UsersFactory,
  ) {}

  getDto(user: User): IdDto {
    const idDto = new IdDto();
    idDto.id = user.userId;
    return idDto;
  }

  create(email: string, password: string) {
    const user = this.usersFactory.getNewUser(email, password);
    this.usersRepository.save(user);
    return this.getDto(user);
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
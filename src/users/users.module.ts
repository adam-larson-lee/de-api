import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersFactory } from './users.factory';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersFactory],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
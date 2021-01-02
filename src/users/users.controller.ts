import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewUserDto } from './new-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get(':userId')
  getUser(@Param('userId') userId: number) {
    return this
      .usersService
      .findByUserId(userId)
      .then(this.usersService.toDto);
  }

  @Post()
  getNewUser(@Body() user: NewUserDto) {
    return this
      .usersService
      .create(user.email, user.password)
      .then(this.usersService.toDto);
  }
}

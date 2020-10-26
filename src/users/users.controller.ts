import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get(':userId')
  getUser(@Param('userId') userId: number) {
    return this.usersService.findByUserId(userId);
  }

  @Post()
  getNewUser(@Body() user: UserDto) {
    return this.usersService.create(user.email, user.password);
  }
}

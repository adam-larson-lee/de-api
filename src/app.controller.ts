
import { Controller, Get, Request, Post, UseGuards, Body, Param } from '@nestjs/common';
import { UserAuthGuard } from './auth/guard/user-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/guard/jwt/jwt-auth.guard';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(JwtAuthGuard, UserAuthGuard)
  @ApiBearerAuth('JWT')
  @Get('profile/:userId')
  getProfile(@Param('userId') userId: number) {
    return userId;
  }
}
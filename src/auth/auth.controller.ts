import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { LoginUserDto } from "src/users/login-user.dto";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guard/local-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return this.authService.getToken(user.email);
  }
}

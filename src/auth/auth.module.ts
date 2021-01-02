
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './guard/local.strategy';
import { JwtStrategy } from './guard/jwt/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { config } from 'src/config/config';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
          secret: configService.get(config.jwtSecret),
          signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
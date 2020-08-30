import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[PassportModule],
  controllers: [LoginController],
  providers: [LocalStrategy,JwtStrategy],
})
export class LoginModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PassportModule],
  controllers: [AuthController],
  providers:[LocalStrategy]
})
export class AuthModule {}

import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { AdminUser } from 'libs/db/models/adminuser.model';
import {CurrentUser} from './current-user. decorator'
import { DocumentType } from '@typegoose/typegoose';

@Controller('login')
@ApiTags('登录')
export class LoginController {
    constructor(
        private jwtService:JwtService
    ){}
    
    @Post()
    @UseGuards(AuthGuard('local'))
    async login(@Body() loginDto:UserLoginDto, @CurrentUser() user:DocumentType<AdminUser>):Promise<any>{
        return {
            token:this.jwtService.sign(String(user._id))
        }
    }
}
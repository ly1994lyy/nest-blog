import { Controller, Post, Body, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'libs/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('auth')
@ApiTags('登录注册认证')
export class AuthController {
    constructor(
        @InjectModel(User) private userModel:ReturnModelType<typeof User>
    ){}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Body() loginDto:LoginDto ,@Req() req):Promise<any>{
        return req.user
    }

    @Post('register')
    async register(@Body() registerDto:RegisterDto,):Promise<any>{
        const {username,password} = registerDto
        const user = await this.userModel.findOne({username})
        if(user){
            throw new BadRequestException('用户已存在')
        }
        await this.userModel.create({username,password})
        return {
            success:true,
            message:'注册成功'
        }
    }
}

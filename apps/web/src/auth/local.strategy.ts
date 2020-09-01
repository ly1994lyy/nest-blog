import {Strategy, IStrategyOptions} from 'passport-local'
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'libs/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { HttpException } from '@nestjs/common';
import { compareSync } from 'bcrypt';


export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(User) private userModel:ReturnModelType<typeof User>
    ){
        super({usernameField:'username',passwordField:'password'} as IStrategyOptions)
    }

    async validate(username:string,password:string):Promise<any>{
        const user = await this.userModel.findOne({username}).select('+password')
        if(!user){
            throw new HttpException('用户不存在',401)
        }
        const isPass = compareSync(password,user.password)
        if(!isPass){
            throw new HttpException('密码错误',401)
        }
        return user
    }
}
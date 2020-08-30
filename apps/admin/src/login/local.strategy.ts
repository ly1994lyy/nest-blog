import { Strategy, IStrategyOptions } from "passport-local";
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from "nestjs-typegoose";
import { AdminUser } from "libs/db/models/adminuser.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { compareSync } from "bcrypt";
import { HttpException } from "@nestjs/common";

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(AdminUser) private adminUserModel:ReturnModelType<typeof AdminUser>
    ){
        super({
            usernameField:'username',
            passwordField:'password'
        } as IStrategyOptions)
    }

    async validate(username:string,password:string):Promise<any>{
        const user = await this.adminUserModel.findOne({username}).select('+password')
        if(!user){
            throw new HttpException('用户不存在！',401) 
        }
        const passIsTrue = compareSync(password,user.password)
        if(!passIsTrue){
            throw new HttpException('密码错误！',401)
        }
        return user
    }
}
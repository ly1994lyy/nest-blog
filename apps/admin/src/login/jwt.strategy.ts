import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { AdminUser } from "libs/db/models/adminuser.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { HttpException } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(AdminUser) private adminUserModel:ReturnModelType<typeof AdminUser>
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.SECRET
        } as StrategyOptions)
    }

    async validate(id):Promise<any>{
        const user =  await this.adminUserModel.findById(id)
        if(!user){
            throw new HttpException('请先登录！',401)
        }
        return user
    }
}
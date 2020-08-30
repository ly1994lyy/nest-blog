import { prop } from "@typegoose/typegoose";
import {hashSync} from 'bcrypt'
import { ApiProperty } from "@nestjs/swagger";

export class AdminUser{
    @ApiProperty({title:'用户名'})
    @prop()
    username:string

    @ApiProperty({title:'密码'})
    @prop({
        select:false,
        set(val){
            return val?hashSync(val,10):val
        },
        get(val){
            return val
        }
    })
    password:string
}

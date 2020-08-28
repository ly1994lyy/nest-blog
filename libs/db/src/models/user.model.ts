import { prop } from "@typegoose/typegoose";
import {hashSync} from 'bcrypt'
import { ApiProperty } from "@nestjs/swagger";

export class User{
    @ApiProperty({title:'用户名'})
    @prop()
    username:string

    @ApiProperty({title:'密码'})
    @prop({
        set(val){
            return hashSync(val,10)
        },
        get(val){
            return val
        }
    })
    password:string
}
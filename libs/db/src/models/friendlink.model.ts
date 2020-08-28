import { prop } from "@typegoose/typegoose";


export class friendLink{
    @prop()
    title:string

    @prop()
    ref:string
}
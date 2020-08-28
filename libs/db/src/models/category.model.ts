import { prop } from "@typegoose/typegoose";

export class Category{
    @prop()
    isHot:boolean

    @prop()
    name:string

    @prop()
    color:string
}
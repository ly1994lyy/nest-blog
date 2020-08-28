import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Article {
    @prop()
    title:string

    @prop()
    body:string

    @prop()
    isHot:boolean
}
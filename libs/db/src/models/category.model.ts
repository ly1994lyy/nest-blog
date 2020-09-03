import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Article } from "./article.model";

@modelOptions({
    schemaOptions:{
        toJSON:{
            virtuals:true
        }
    }
})


export class Category{
    @prop()
    isHot:boolean

    @prop()
    name:string

    @prop()
    color:string

    @prop({
        ref:'Article',
        localField:'_id',
        foreignField:'categories'
    })
    articles:Ref<Article>[]
}
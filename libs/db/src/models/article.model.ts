import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { Category } from './category.model'

@modelOptions({
    schemaOptions:{
        timestamps:{
            createdAt:'created',
            updatedAt:'updated'
        }
    }
})

export class Article {
    @prop()
    title:string

    @prop({ref:'Category'})
    categories:Ref<Category>[]

    @prop()
    body:string

    @prop({default:false})
    isHot:boolean
}
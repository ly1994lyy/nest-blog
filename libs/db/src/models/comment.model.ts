import { prop, Ref } from "@typegoose/typegoose";
import { Article } from "./article.model";
import { User } from "./user.model";

export class Comment{
    @prop({ref:'Article'})
    article:Ref<Article>

    @prop({ref:"User"})
    commenter:Ref<User>

    @prop()
    body:string
}
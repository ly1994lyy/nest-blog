import { prop, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";
import { Article } from "./article.model";

export class Like{
    @prop({ref:'User'})
    user:Ref<User>

    @prop({ref:'Article'})
    article:Ref<Article>
}
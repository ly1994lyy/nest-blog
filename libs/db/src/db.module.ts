import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Category } from './models/category.model';
import { friendLink } from './models/friendlink.model';
import { User } from './models/user.model';
import { Comment } from './models/comment.model';
import { Article } from './models/article.model';
import { Like } from './models/like.model';
import { Other } from './models/other.model';
import { About } from './models/about.model';
import { AdminUser } from './models/adminuser.model';

const models = TypegooseModule.forFeature([Category,AdminUser, friendLink, User, Comment, Article, Like, Other, About])

@Global()
@Module({
  providers: [DbService],
  imports: [
    TypegooseModule.forRootAsync({
      useFactory(){
        return {
          uri:process.env.DB,
          useCreateIndex: true,
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      }
    }),
    models
  ],
  exports: [DbService, models],
})
export class DbModule { }
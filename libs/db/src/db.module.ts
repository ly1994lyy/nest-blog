import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Category } from './models/category.model';
import { friendLink } from './models/friendlink.model';
import { User } from './models/user.model';
import { Comment } from './models/comment.model';
import { Article } from './models/article.model';

const models = TypegooseModule.forFeature([Category,friendLink,User,Comment,Article])

@Global()
@Module({
  providers: [DbService],
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/react-blog',{
      useCreateIndex:true,
      useNewUrlParser:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    }),
    models
  ],
  exports: [DbService,models],
})
export class DbModule {}
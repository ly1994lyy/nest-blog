import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from "@app/common"
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { FriendlinkModule } from './friendlink/friendlink.module';
import { LikeModule } from './like/like.module';
import { AboutModule } from './about/about.module';
import { OtherModule } from './other/other.module';

@Module({
  imports: [CommonModule, CategoriesModule, ArticlesModule, AuthModule, CommentModule, FriendlinkModule, LikeModule, AboutModule, OtherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

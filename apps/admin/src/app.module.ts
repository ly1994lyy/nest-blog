import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { DbModule } from 'libs/db';
import { FriendlinkModule } from './friendlink/friendlink.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ArticlesModule, CategoriesModule,DbModule, FriendlinkModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { FriendlinkModule } from './friendlink/friendlink.module';
import { UserModule } from './user/user.module';
import { OtherModule } from './other/other.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@app/common';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    CommonModule, 
    ArticlesModule,
    CategoriesModule, 
    FriendlinkModule, 
    UserModule, 
    OtherModule, 
    AboutModule,
    LoginModule,
    MulterModule.register({
      dest:'uploads'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

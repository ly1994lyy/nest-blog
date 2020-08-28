import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose'

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/blog-nest-api',{
      useNewUrlParser:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

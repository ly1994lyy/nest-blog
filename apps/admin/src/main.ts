import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import {NestExpressApplication} from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  app.useStaticAssets('uploads',{
    prefix:'/uploads'
  })
  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('基于Nest的博客接口')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('admin-docs', app, document);
  
  await app.listen(process.env.ADMIN_PORT);
  app.useGlobalPipes(new ValidationPipe())
}
bootstrap();

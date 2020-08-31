import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';

@Module({
  controllers: [LikeController]
})
export class LikeModule {}

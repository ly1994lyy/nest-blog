import { Module } from '@nestjs/common';
import { FriendlinkController } from './friendlink.controller';

@Module({
  controllers: [FriendlinkController]
})
export class FriendlinkModule {}

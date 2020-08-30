import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { DbModule } from 'libs/db';
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

@Global()
@Module({
  imports:[DbModule,ConfigModule.forRoot({
    isGlobal:true
  }),
  DbModule,
  JwtModule.registerAsync({
    useFactory(){
      return {
        secret:process.env.SECRET
      }
    }
  }),
],
  providers: [CommonService],
  exports: [CommonService,JwtModule],
})
export class CommonModule {}

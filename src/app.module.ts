import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisService } from './redis.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [RedisService, AppService],
})
export class AppModule {}

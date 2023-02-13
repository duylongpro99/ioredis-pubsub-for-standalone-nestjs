import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class AppService {
  constructor(private readonly redisService: RedisService) {}
  getHello(): string {
    this.redisService.publish('test', 'Something');
    return 'Hello World!';
  }
}

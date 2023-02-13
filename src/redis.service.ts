import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: '127.0.0.1',
      port: 6379,
      // password: '',
    });
    console.log('init');
    this.subscribe('test', (message) => {
      console.log(message);
    });
  }

  async publish(channel: string, message: any) {
    await this.redis.publish(channel, JSON.stringify(message));
  }

  async subscribe(channel: string, callback: (message: any) => void) {
    this.redis.on('message', (channel, message) => {
      console.log(channel, message);
    });
    await this.redis.subscribe(channel);
  }
}

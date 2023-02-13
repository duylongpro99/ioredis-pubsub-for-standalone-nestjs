import { Controller, Get, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'user_created' })
  userCreatedMessage(name: string): string {
    console.log(`1: Hello ${name}`);
    return `Hello ${name}`;
  }

  @EventPattern('user_created')
  userCreatedMessageAsyc(name: string): string {
    console.log(`2: Hello ${name}`);
    return `Hello ${name}`;
  }

  @EventPattern('test')
  getTestAsyc(name: string): string {
    console.log(`3: Is testing`);
    return `Hello ${name}`;
  }

  @Get('test')
  async test() {
    await this.appService.getHello();
  }
}

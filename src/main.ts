import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.REDIS,
  //     options: {
  //       host: 'captain.vn01.zodinet.tech',
  //       port: 63790,
  //       password: 'WTP9zcaHsjw7wmu7',
  //     },
  //   },
  // );
  const app = await NestFactory.create(AppModule);
  await app.listen(4005);
}
bootstrap();

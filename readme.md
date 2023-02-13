# Redis pubsub in Nestjs

## Microservice

- With microservice options, from main.ts init nestjs app with  createMicroservice option
- Define redis option when init microservice, so can use some decorators such as EventPattern, MessagePattern to subscribe other microservice publish message

## Stand alone
- When init nestjs app with stand alone option, leverage ioredis package power to create a redis's client and some custom service to publish, subscribe message
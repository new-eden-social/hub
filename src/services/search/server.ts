import { NestFactory } from '@nestjs/core';
import { ValidatorPipe } from '@new-eden-social/validation';
// Used for TypeORM
import 'reflect-metadata';
// Request context
import 'zone.js';
import 'zone.js/dist/zone-node.js';
import 'zone.js/dist/long-stack-trace-zone.js';
import { SearchModule } from './src/search.module';

async function bootstrap() {
  const nestApp = await NestFactory.create(SearchModule);
  nestApp.enableCors();
  nestApp.useGlobalPipes(new ValidatorPipe());
  await nestApp.listen(parseInt(process.env.PORT, 10));
}

bootstrap();

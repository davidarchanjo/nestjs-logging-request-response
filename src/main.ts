import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger: Logger = new Logger('NestApplication');

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.log(`Server ready at ${await app.getUrl()}`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestSrvicePort = configService.get('nest.port');
  await app.listen(nestSrvicePort);

  logger.log(`Server started on port ${nestSrvicePort}`);
}
bootstrap();

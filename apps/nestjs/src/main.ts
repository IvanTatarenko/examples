import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV_CONFIG } from 'env-config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  
  const port = ENV_CONFIG.APP_PORT;
  const environment = ENV_CONFIG.NODE_ENV;

  await app.listen(port, () => {
    logger.log(`🚀 Застосунок запущено в середовищі "${environment}" на порту ${port}`);
  });
}
bootstrap();

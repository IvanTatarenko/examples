import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ENV_CONFIG } from 'env-config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: ENV_CONFIG.DB_HOST,
      port: ENV_CONFIG.DB_PORT,
      username: ENV_CONFIG.DB_USERNAME,
      password: ENV_CONFIG.DB_PASSWORD,
      database: ENV_CONFIG.DB_NAME,
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: ENV_CONFIG.NODE_ENV !== 'prod',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

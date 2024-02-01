import { Module, ModuleMetadata } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

const apiModules: ModuleMetadata['imports'] = [];


@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('postgres.host'),
        port: configService.get<number>('postgres.port'),
        username: configService.get<string>('postgres.user'),
        password: configService.get<string>('postgres.password'),
        database: configService.get<string>('postgres.db'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ...apiModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

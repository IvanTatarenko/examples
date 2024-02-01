import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { UserController } from './users.controller';
import { UsersDataBaseService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UserController],
  providers: [UsersDataBaseService],
  exports: [UsersDataBaseService],
})
export class AdminUserModule {}

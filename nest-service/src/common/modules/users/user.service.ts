import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UsersEntity } from './users.entity';
import { UserDto } from './user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersDataBaseService implements OnModuleInit {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly adminUserRepository: Repository<UsersEntity>,
    private readonly config: ConfigService,
  ) {}

  async onModuleInit() {
    const users = await this.getAll();
    if (users.length === 0) {
      const standartUser = new UsersEntity();
      standartUser.email = this.config.get('nest.standart_login');
      standartUser.password = this.config.get('nest.statndart_password');
      await this.create(standartUser);
    }
  }

  async create(adminUserDto: UserDto): Promise<UsersEntity> {
    const adminUser = new UsersEntity();
    adminUser.id = adminUserDto.id;
    adminUser.email = adminUserDto.email;
    const salt = await bcrypt.genSalt(10);
    adminUser.password = await bcrypt.hash(adminUserDto.password, salt);

    return await this.adminUserRepository.save(adminUser);
  }

  async getAll(): Promise<UsersEntity[]> {
    return await this.adminUserRepository.find();
  }

  async getOneById(id: UsersEntity['id']): Promise<UsersEntity> {
    return await this.adminUserRepository.findOne({ where: { id: id } });
  }

  async getOneByEmail(email: UsersEntity['email']): Promise<UsersEntity> {
    return await this.adminUserRepository.findOne({ where: { email: email } });
  }
}

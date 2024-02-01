import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersDataBaseService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly _userDBService: UsersDataBaseService,
  ) {}

  @Post()
  async create(@Body() adminUserDto: UserDto): Promise<UserDto> {
    return this._userDBService.create(adminUserDto);
  }

  @Get()
  async getAll(): Promise<UserDto[]> {
    return this._userDBService.getAll();
  }
}

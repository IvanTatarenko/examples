import { IsString } from 'class-validator';
import { BaseDto } from 'src/common/dtos/base.dto';

export class UserDto extends BaseDto{
  @IsString()
  email: string;
  @IsString()
  password: string;
}

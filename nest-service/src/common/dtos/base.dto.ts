import { IsOptional } from 'class-validator';

export abstract class BaseDto {
  @IsOptional()
  id: string;

  @IsOptional()
  created_at: Date;

  @IsOptional()
  updated_at: Date;

  @IsOptional()
  deleted_at: Date;
}

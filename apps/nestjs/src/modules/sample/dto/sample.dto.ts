import { IsNotEmpty, IsString } from 'class-validator';

export class SampleDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  name: string;
  disc: string;
}

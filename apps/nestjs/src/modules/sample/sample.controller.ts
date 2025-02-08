import { Controller, Get, Param, Query } from '@nestjs/common';
import { SampleService } from './sample.service';
import { ListResponseDto } from 'src/common/dto/list-response.dto';
import { SampleDto } from './dto/sample.dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  async getList(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<ListResponseDto<SampleDto>> {
    const response = await this.sampleService.getList(page, limit);
    return response;
  }

  @Get(':slug')
  async getOneBySlug(
    @Param('slug') slug: SampleDto['slug'],
  ): Promise<ResponseDto<SampleDto>> {
    const response = await this.sampleService.getOneBySlug(slug);
    return response;
  }
}

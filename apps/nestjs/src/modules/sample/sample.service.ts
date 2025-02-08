import { BadRequestException, Injectable } from '@nestjs/common';
import { ListResponseDto } from 'src/common/dto/list-response.dto';
import { SampleDto } from './dto/sample.dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@Injectable()
export class SampleService {
  async getList(
    page: ListResponseDto<SampleDto>['page'],
    limit: ListResponseDto<SampleDto>['limit'],
  ): Promise<ListResponseDto<SampleDto>> {
    // моки
    // TODO Зробити отримання данних
    const res = new ListResponseDto<SampleDto>();
    res.data = [new SampleDto()];
    res.total = limit;
    res.page = page;
    res.limit = page;
    return res;
  }

  async getOneBySlug(slug: SampleDto['slug']): Promise<ResponseDto<SampleDto>> {
    if (!slug) {
      throw new BadRequestException('Slug must not be empty');
    }
    const res = new ResponseDto<SampleDto>();
    res.data = new SampleDto();
    res.data.slug = slug;

    if (!res) {
      throw new BadRequestException(`Item with slug "${slug}" not found`);
    }
    return res;
  }
}

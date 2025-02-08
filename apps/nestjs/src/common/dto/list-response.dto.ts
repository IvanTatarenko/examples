export class ListResponseDto<T> {
  total: number;
  page: number;
  limit: number;
  data: T[];
}

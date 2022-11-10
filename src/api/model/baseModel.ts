export interface BasicPageParams {
  pageIndex: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  data: T[];
  count: number;
}

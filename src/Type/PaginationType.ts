export interface queryparamsType {
  SearchTerm?: string;
  PageSize?: number;
  PageNumber?: number | undefined;
  TotalCount?: number;
  TotalPages?: number;
  HasNext?: boolean;
}
export interface queryparamsApiType {
  search_term?: string;
  page_size?: number;
  page_number?: number;
  total_count?: number;
  total_page?: number;
}

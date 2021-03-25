import { INews } from './INews';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export enum Types {
  NEWS_ON_REFRESH_LIST = 'NEWS_ON_REFRESH_LIST',
  NEWS_REFRESH_LIST = 'NEWS_REFRESH_LIST',
  NEWS_REFRESH_FETCH_STATUS = 'NEWS_REFRESH_FETCH_STATUS',
  NEWS_ON_REFRESH_ACTIVE = 'NEWS_ON_REFRESH_ACTIVE',
  NEWS_REFRESH_ACTIVE = 'NEWS_REFRESH_ACTIVE',
  NEWS_REFRESH_ACTIVE_FETCH_STATUS = 'NEWS_REFRESH_ACTIVE_FETCH_STATUS',
}

export const Creators = {
  newsOnRefreshList: (pageNumber: number, pageSize: number = 10) =>
    ({
      type: Types.NEWS_ON_REFRESH_LIST,
      pageNumber,
      pageSize,
    } as const),
  newsRefreshList: (news: INews[], count: number, pageNumber: number) =>
    ({
      type: Types.NEWS_REFRESH_LIST,
      items: news,
      count,
      pageNumber,
    } as const),
  newsRefreshFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.NEWS_REFRESH_FETCH_STATUS,
      status,
    } as const),
  newsOnRefreshActive: (id?: string) =>
    ({
      type: Types.NEWS_ON_REFRESH_ACTIVE,
      id,
    } as const),
  newsRefreshActive: (newsItem: INews) =>
    ({
      type: Types.NEWS_REFRESH_ACTIVE,
      item: newsItem,
    } as const),
  newsRefreshActiveFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.NEWS_REFRESH_ACTIVE_FETCH_STATUS,
      activeStatus: status,
    } as const),
};

import { IDissertation } from '../interfaces/IDissertation';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export enum Types {
  DISSERTATION_GET_LIST = 'DISSERTATION_GET_LIST',
  DISSERTATION_REFRESH_LIST = 'DISSERTATION_REFRESH_LIST',
  DISSERTATION_REFRESH_FETCH_STATUS = 'DISSERTATION_REFRESH_FETCH_STATUS',
}

export const Creators = {
  dissertationGetList: (locale) =>
    ({
      type: Types.DISSERTATION_GET_LIST,
      locale,
    } as const),
  dissertationRefreshList: (dissertations: IDissertation[]) =>
    ({
      type: Types.DISSERTATION_REFRESH_LIST,
      items: dissertations,
    } as const),
  dissertationRefreshFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.DISSERTATION_REFRESH_FETCH_STATUS,
      status,
    } as const),
};

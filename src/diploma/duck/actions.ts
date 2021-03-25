import { IDiploma } from '../interfaces/IDiploma';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export enum Types {
  DIPLOMA_GET_LIST = 'DIPLOMA_GET_LIST',
  DIPLOMA_REFRESH_LIST = 'DIPLOMA_REFRESH_LIST',
  DIPLOMA_REFRESH_FETCH_STATUS = 'DIPLOMA_REFRESH_FETCH_STATUS',
}

export const Creators = {
  diplomaGetList: () =>
    ({
      type: Types.DIPLOMA_GET_LIST,
    } as const),
  diplomaRefreshList: (diploma: IDiploma[]) =>
    ({
      type: Types.DIPLOMA_REFRESH_LIST,
      items: diploma,
    } as const),
  diplomaRefreshFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.DIPLOMA_REFRESH_FETCH_STATUS,
      status,
    } as const),
};

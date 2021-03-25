import { IEmployer } from '../interfaces/IEmployer';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export enum Types {
  EMPLOYER_GET_LIST = 'EMPLOYER_GET_LIST',
  EMPLOYER_REFRESH_LIST = 'EMPLOYER_REFRESH_LIST',
  EMPLOYER_REFRESH_FETCH_STATUS = 'EMPLOYER_REFRESH_FETCH_STATUS',
}

export const Creators = {
  employerGetList: () =>
    ({
      type: Types.EMPLOYER_GET_LIST,
    } as const),
  employerRefreshList: (employer: IEmployer[]) =>
    ({
      type: Types.EMPLOYER_REFRESH_LIST,
      items: employer,
    } as const),
  employerRefreshFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.EMPLOYER_REFRESH_FETCH_STATUS,
      status,
    } as const),
};

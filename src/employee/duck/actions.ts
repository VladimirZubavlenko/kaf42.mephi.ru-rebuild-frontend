import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { IEmployeeWithType } from '../interfaces/IEmployeeWithType';

export enum Types {
  EMPLOYEE_GET_LIST = 'EMPLOYEE_GET_LIST',
  EMPLOYEE_REFRESH_LIST = 'EMPLOYEE_REFRESH_LIST',
  EMPLOYEE_REFRESH_FETCH_STATUS = 'EMPLOYEE_REFRESH_FETCH_STATUS',
}

export const Creators = {
  employeeGetList: (lang: string) =>
    ({
      type: Types.EMPLOYEE_GET_LIST,
      lang,
    } as const),
  employeeRefreshList: (employee: IEmployeeWithType) =>
    ({
      type: Types.EMPLOYEE_REFRESH_LIST,
      items: employee,
    } as const),
  employeeRefreshFetchStatus: (status: FetchingStatuses) =>
    ({
      type: Types.EMPLOYEE_REFRESH_FETCH_STATUS,
      status,
    } as const),
};

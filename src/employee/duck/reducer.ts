import { Creators, Types } from './actions';

import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { IEmployeeWithType } from '../interfaces/IEmployeeWithType';

export interface IState {
  items: IEmployeeWithType;
  status: FetchingStatuses;
}

const initialState: IState = {
  items: {
    main: [],
    list: [],
  },
  status: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.EMPLOYEE_REFRESH_LIST && {
    ...state,
    items: action.items,
    status: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.EMPLOYEE_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  }) ||
  state;

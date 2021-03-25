import { Creators, Types } from './actions';

import { IEmployer } from '../interfaces/IEmployer';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export interface IState {
  items: IEmployer[];
  status: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  status: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.EMPLOYER_REFRESH_LIST && {
    ...state,
    items: action.items,
    status: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.EMPLOYER_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  }) ||
  state;

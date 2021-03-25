import { Creators, Types } from './actions';

import { IDissertation } from '../interfaces/IDissertation';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export interface IState {
  items: IDissertation[];
  status: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  status: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.DISSERTATION_REFRESH_LIST && {
    ...state,
    items: action.items,
    status: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.DISSERTATION_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  }) ||
  state;

import { Creators, Types } from './actions';

import { INews } from './INews';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export interface IState {
  items: INews[];
  status: FetchingStatuses;
  activeItem: INews | null;
  activeStatus: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  status: FetchingStatuses.NONE,
  activeItem: null,
  activeStatus: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.NEWS_REFRESH_LIST && {
    ...state,
    items: [...action.items],
    status: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.NEWS_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  }) ||
  (action.type === Types.NEWS_REFRESH_ACTIVE && {
    ...state,
    activeItem: action.item,
    activeStatus: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.NEWS_REFRESH_ACTIVE_FETCH_STATUS && {
    ...state,
    activeStatus: action.activeStatus,
  }) ||
  state;

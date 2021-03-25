import { Creators, Types } from './actions';

import { INews } from './INews';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export interface IState {
  items: INews[];
  status: FetchingStatuses;
  pageNumber: number;
  count: number;
  activeItem: INews | null;
  activeStatus: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  status: FetchingStatuses.NONE,
  pageNumber: 1,
  count: 0,
  activeItem: null,
  activeStatus: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.NEWS_REFRESH_LIST && {
    ...state,
    items: [...state.items, ...action.items],
    status: FetchingStatuses.SUCCESS,
    count: action.count,
    pageNumber: action.pageNumber,
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

import { Creators, Types } from './actions';

import { IDiploma } from '../interfaces/IDiploma';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';

export interface IState {
  items: IDiploma[];
  status: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  status: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState =>
  (action.type === Types.DIPLOMA_REFRESH_LIST && {
    ...state,
    items: action.items,
    status: FetchingStatuses.SUCCESS,
  }) ||
  (action.type === Types.DIPLOMA_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  }) ||
  state;

import { all, put, takeEvery, call } from 'redux-saga/effects';

import { Creators, Types } from './actions';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { fetchData } from '../../common/helpers/fetchData';
import { IDiploma } from '../interfaces/IDiploma';

export function* onGetList() {
  yield takeEvery(Types.DIPLOMA_GET_LIST, refreshDiploma);
}

function* refreshDiploma() {
  yield put(Creators.diplomaRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    // @ts-ignore
    const response = yield call(fetchData, '/diploma/list/');

    const data: IDiploma[] = yield response.json();

    yield put(Creators.diplomaRefreshList(data));
  } catch (e) {
    yield put(Creators.diplomaRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([onGetList()]);
}

import { all, put, takeEvery, call } from 'redux-saga/effects';

import { Creators, Types } from './actions';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { fetchData } from '../../common/helpers/fetchData';
import { IEmployer } from '../interfaces/IEmployer';

export function* onGetList() {
  yield takeEvery(Types.EMPLOYER_GET_LIST, refreshEmployer);
}

function* refreshEmployer() {
  yield put(Creators.employerRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    // @ts-ignore
    const response = yield call(fetchData, '/employer/list/');

    const data: IEmployer[] = yield response.json();

    yield put(Creators.employerRefreshList(data));
  } catch (e) {
    yield put(Creators.employerRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([onGetList()]);
}

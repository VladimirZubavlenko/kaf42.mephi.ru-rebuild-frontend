import { all, put, takeEvery, call } from 'redux-saga/effects';

import { Creators, Types } from './actions';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { fetchData } from '../../common/helpers/fetchData';
import { IEmployeeWithType } from '../interfaces/IEmployeeWithType';

export function* onGetList() {
  yield takeEvery(Types.EMPLOYEE_GET_LIST, refreshEmployee);
}

function* refreshEmployee() {
  yield put(Creators.employeeRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    // @ts-ignore
    const response = yield call(fetchData, '/employee/list/?lang=RU');

    const data: IEmployeeWithType = yield response.json();

    yield put(Creators.employeeRefreshList(data));
  } catch (e) {
    yield put(Creators.employeeRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([onGetList()]);
}

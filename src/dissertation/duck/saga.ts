import { all, put, takeEvery, call } from 'redux-saga/effects';
import qs from 'query-string';

import { Creators, Types } from './actions';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { fetchData } from '../../common/helpers/fetchData';
import { IDissertation } from '../interfaces/IDissertation';

export function* onGetList() {
  yield takeEvery(Types.DISSERTATION_GET_LIST, refreshDissertation);
}

function* refreshDissertation(action: ReturnType<typeof Creators.dissertationGetList>) {
  yield put(Creators.dissertationRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    // @ts-ignore
    const response = yield call(
      fetchData,
      `/dissertation/list/?${qs.stringify({
        lang: action.locale,
      })}`,
    );

    const data: IDissertation[] = yield response.json();

    yield put(Creators.dissertationRefreshList(data));
  } catch (e) {
    yield put(Creators.dissertationRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([onGetList()]);
}

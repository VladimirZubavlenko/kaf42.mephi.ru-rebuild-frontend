import { all, call, put, takeEvery } from 'redux-saga/effects';
import qs from 'query-string';

import { Creators, Types } from './actions';
import { FetchingStatuses } from '../../common/enums/fetchingStatuses';
import { fetchData } from '../../common/helpers/fetchData';
import { INews } from './INews';

export function* onRefreshList() {
  yield takeEvery(Types.NEWS_ON_REFRESH_LIST, refreshList);
}

export function* onRefreshActive() {
  yield takeEvery(Types.NEWS_ON_REFRESH_ACTIVE, refreshActive);
}

function* refreshList(action: ReturnType<typeof Creators.newsOnRefreshList>) {
  yield put(Creators.newsRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    const response = yield call(
      fetchData,
      `/news/all?${qs.stringify({
        lang: action.lang,
      })}`,
    );
    const data: INews[] = yield response.json();

    yield put(Creators.newsRefreshList(data, action.lang));
  } catch (e) {
    yield put(Creators.newsRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

function* refreshActive(action: ReturnType<typeof Creators.newsOnRefreshActive>) {
  try {
    // @ts-ignore
    const response = yield call(
      fetchData,
      `/news/item?${qs.stringify({
        lang: action.lang,
        id: action.id,
      })}`,
    );

    const data: INews = yield response.json();

    yield put(Creators.newsRefreshActive(data));
  } catch (e) {
    yield put(Creators.newsRefreshActiveFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([onRefreshList(), onRefreshActive()]);
}

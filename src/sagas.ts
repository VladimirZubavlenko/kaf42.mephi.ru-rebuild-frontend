import { all } from 'redux-saga/effects';

import { saga as newsSaga } from './news/duck/saga';
import { saga as employeeSaga } from './employee/duck/saga';
import { saga as diplomaSaga } from './diploma/duck/saga';
import { saga as employerSaga } from './employer/duck/saga';
import { saga as dissertationSaga } from './dissertation/duck/saga';

export function* sagas() {
  yield all([newsSaga(), employeeSaga(), diplomaSaga(), employerSaga(), dissertationSaga()]);
}

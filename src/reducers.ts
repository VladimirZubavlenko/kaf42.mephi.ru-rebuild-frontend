import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';

import { reducer as newsReducer, IState as INewsState } from './news/duck/reducer';
import { reducer as employeeReducer, IState as IEmployeesState } from './employee/duck/reducer';
import { reducer as diplomaReducer, IState as IDiplomasState } from './diploma/duck/reducer';
import { reducer as employerReducer, IState as IEmployersState } from './employer/duck/reducer';
import { reducer as dissertationReducer, IState as IDissertationsState } from './dissertation/duck/reducer';

export interface IRootState {
  router: RouterState;
  news: INewsState;
  employee: IEmployeesState;
  diploma: IDiplomasState;
  employer: IEmployersState;
  dissertation: IDissertationsState;
}

export const createRootReducer = (history: History) =>
  combineReducers<IRootState>({
    router: connectRouter(history),
    news: newsReducer,
    employee: employeeReducer,
    diploma: diplomaReducer,
    employer: employerReducer,
    dissertation: dissertationReducer,
  });

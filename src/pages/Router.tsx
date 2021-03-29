import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes } from '../common/enums/routes';
import Root from './Root';
import NewsContainer from './NewsContainer';
import Employee from './Employee';
import Employer from './Employer';
import Dissertation from './Dissertation';
import Feedback from './Feedback';

export const Router: React.FC = () => (
  <Switch>
    <React.Suspense fallback={<div />}>
      <Route path={Routes.ROOT} exact component={Root} />
      <Route path={Routes.NEWS} exact component={NewsContainer} />
      <Route path={Routes.EMPLOYEE} exact component={Employee} />
      <Route path={Routes.EMPLOYER} exact component={Employer} />
      <Route path={Routes.DISSERTATION} exact component={Dissertation} />
      <Route path={Routes.FEEDBACK} exact component={Feedback} />
    </React.Suspense>
  </Switch>
);

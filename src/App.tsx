import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './reducers';
import { sagas } from './sagas';
import { Router } from './pages/Router';
import { Layout } from './layout/Layout';
import { Theme } from './common/components/Theme';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(sagas);

export const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Theme>
        <Layout>
          <Router />
        </Layout>
      </Theme>
    </ConnectedRouter>
  </Provider>
);

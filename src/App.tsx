import React, { useState } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

import { IntlProvider } from 'react-intl';
import { createRootReducer } from './reducers';
import { sagas } from './sagas';
import { Router } from './pages/Router';
import { Layout } from './layout/Layout';
import { Theme } from './common/components/Theme';
import RU from './i18n/ru.json';
import EN from './i18n/en.json';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(sagas);

const messages = {
  RU: RU.messages,
  EN: EN.messages,
};

export const LocaleContext = React.createContext({
  locale: 'RU',
  toggleLocale: () => {},
});

export const App: React.FC = () => {
  const [locale, setLocale] = useState('RU');

  const toggleLocale = () => {
    if (locale === 'RU') {
      setLocale('EN');
    } else setLocale('RU');
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      <Provider store={store}>
        <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
          <ConnectedRouter history={history}>
            <Theme>
              <Layout>
                <Router />
              </Layout>
            </Theme>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    </LocaleContext.Provider>
  );
};

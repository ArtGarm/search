import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function () {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enchancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );
  const store = createStore(rootReducer(history), {}, enchancer);
  sagaMiddleware.run(rootSaga);

  return store;
}

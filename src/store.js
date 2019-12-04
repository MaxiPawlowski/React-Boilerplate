import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import rootReducer from 'reducers';
import { history } from 'utils/history'

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

sagaMiddleware.run(sagas);

export default store;

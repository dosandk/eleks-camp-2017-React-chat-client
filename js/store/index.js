import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import history from '../history';
import { routerMiddleware } from 'react-router-redux';
import { syncMiddleware } from '../middlewares/sync';

const middleware = process.env.NODE_ENV === 'production' ?
  [routerMiddleware(history), thunk, syncMiddleware] :
  [routerMiddleware(history), thunk, syncMiddleware, createLogger()];

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}

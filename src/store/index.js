import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import asyncActionCreator from './middlewares/asyncActionCreator';
import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: 'nts',
  storage,
  blacklist: [],
};

const emptyMiddleWare = function fn1() {
  return function fun2(next) {
    return function fun3(action) {
      return next(action);
    };
  };
};

let loggerMiddleWare = emptyMiddleWare;

if (process.env.REACT_APP_NODE_ENV === 'localhost') {
  loggerMiddleWare = logger;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(asyncActionCreator, thunk, loggerMiddleWare))
);
const persistor = persistStore(store);

export { store, persistor };
export default store;

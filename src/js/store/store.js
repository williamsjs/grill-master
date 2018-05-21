import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducer';

const middleware = [ thunkMiddleware ];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
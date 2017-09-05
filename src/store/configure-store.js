import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '~/src/reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
);

export default function configureStore(initialState) {
  const store = createStore(
    allReducers,
    initialState,
    enhancer
  );

  return store
}

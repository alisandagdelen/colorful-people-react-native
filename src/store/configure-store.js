import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import logicArray from '../logics/index'
import firebase from '../../firebase'
import { createLogicMiddleware } from 'redux-logic';

const reduxLogicDeps = { firebase };
const logicMiddleware = createLogicMiddleware(logicArray, reduxLogicDeps);

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, logicMiddleware, createLogger()),
);

export default function configureStore(initialState) {
  const store = createStore(
    allReducers,
    initialState,
    enhancer
  );

  return store
}

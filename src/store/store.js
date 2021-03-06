import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// Then run the saga
sagaMiddleware.run(rootSaga)
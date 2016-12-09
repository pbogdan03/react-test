import { createStore, applyMiddleware } from 'redux';
// to accept promises as return values from actions
import reduxPromise from 'redux-promise';

import mainReducer from './reducers';

const configureStore = () => {
  return createStore(
    mainReducer,
    { businesses: [] },
    applyMiddleware(reduxPromise)
  );
};

export default configureStore;

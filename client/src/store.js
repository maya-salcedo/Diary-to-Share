import { createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = (state, action) => {
  return { diaries: x };
};

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;

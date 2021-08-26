import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { diaryListReducer } from './reducers/diaryReducers';
import { userSignupReducer } from './reducers/userReducer';

const initialState = {};

const reducer = combineReducers({
  diaryList: diaryListReducer,
  userSignup: userSignupReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

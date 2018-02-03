import { combineReducers } from 'redux';

import forumsReducer from './forumsReducer';
import navReducer from './navReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  nav: navReducer,
  forums: forumsReducer
});
import { combineReducers } from 'redux';

import forumsReducer from './forumsReducer';
import navReducer from './navReducer';

export default combineReducers({
  nav: navReducer,
  forums: forumsReducer
});
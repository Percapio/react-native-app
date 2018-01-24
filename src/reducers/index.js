import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import threadsReducer from './threadsReducer';

export default combineReducers({
  posts: postsReducer,
  threads: threadsReducer
});
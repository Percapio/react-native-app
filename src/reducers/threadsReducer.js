import merge from 'lodash/merge';

import { 
  FETCHED_THREADS,
  FETCHED_THREAD
} from '../actions/threads_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCHED_THREADS:
      return action.threads;
    case FETCHED_THREAD:
      return action.thread;
    default:
      return state;
  }
};
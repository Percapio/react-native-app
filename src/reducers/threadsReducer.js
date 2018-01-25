import merge from 'lodash/merge';

import { FETCHED_THREADS } from '../actions/threads_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCHED_THREADS:
      return action.threads;
    default:
      return state;
  }
};
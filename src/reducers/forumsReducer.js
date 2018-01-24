import merge from 'lodash/merge';

import { FETCHED_FORUMS } from '../actions/forums_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCHED_FORUMS:
      return action.forums;
    default:
      return state;
  }
};
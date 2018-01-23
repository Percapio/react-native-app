import merge from 'lodash/merge';

import { FETCHED_POSTS } from '../actions/post_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCHED_POSTS:
      return action.posts;
    default:
      return state;
  }
};
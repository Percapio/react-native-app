import merge from 'lodash/merge';

import { FETCHED_USER } from '../actions/login_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCHED_USER:
      return action.user;
    default:
      return state;
  }
};
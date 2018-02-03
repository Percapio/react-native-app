import loginUser from '../utils/api_login_user';

export const FETCHED_USER = 'FETCHED_USER';

const fetchedUser = user => ({
  type: FETCHED_USER,
  user,
});

export const sendLogin = credentials => dispatch => (
  loginUser( credentials )
    .then( payload => dispatch( fetchedUser( payload )))
);
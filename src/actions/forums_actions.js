import GetAllForums from '../utils/api_all_forums';

export const FETCHED_FORUMS = 'FETCHED_FORUMS';

const fetchedForums = forums =>({
  type: FETCHED_FORUMS,
  forums
});

export const getAllForums = () => dispatch => (
  GetAllForums()
    .then( payload => dispatch( fetchedForums(payload) ))
);

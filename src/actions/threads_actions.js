import { allThreads } from '../utils/api_threads';

export const FETCHED_THREADS = 'FETCHED_THREADS';

const fetchedThreads = threads =>({
  type: FETCHED_THREADS,
  threads
});

export const getAllThreads = params => dispatch => (
  allThreads( params )
    .then( payload => dispatch( fetchedThreads(payload) ))
);


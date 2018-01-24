import GetAllThreads from '../utils/allThreads';

export const FETCHED_THREADS = 'FETCHED_THREADS';

export const fetchedThreads = threads =>({
  type: FETCHED_THREADS,
  threads
});

export const getAllThreads = () => dispatch => (
  GetAllThreads()
    .then( payload => dispatch( fetchedThreads(payload) ))
);

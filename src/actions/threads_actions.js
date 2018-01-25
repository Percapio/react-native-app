import allThreads from '../utils/api_threads';
import singleThread from '../utils/api_thread';

export const FETCHED_THREADS = 'FETCHED_THREADS';
export const FETCHED_THREAD  = 'FETCHED_THREAD';

const fetchThread = thread =>({
  type: FETCHED_THREAD,
  thread
});

const fetchedThreads = threads =>({
  type: FETCHED_THREADS,
  threads
});

export const getAllThreads = params => dispatch => (
  allThreads( params )
    .then( payload => dispatch( fetchedThreads(payload) ))
);

export const getThread = params => dispatch => (
  singleThread( params )
    .then( payload => dispatch( fetchThread(payload) ))
);
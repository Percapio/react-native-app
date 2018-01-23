import * as APIUtil from '../utils/api_util';

export const FETCHED_POSTS = 'FETCHED_POSTS';

export const fetchedPosts = posts => ({
  type: FETCHED_POSTS,
  posts
});

export const getAllPosts = () => dispatch => (
  APIUtil.getAllPosts()
    .then( response => response.json() )
    .then( payload => dispatch( fetchedPosts(payload) ))
);
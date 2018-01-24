import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import PostsContainer from './containers/posts_container';
import ThreadsContainer from './containers/threads_container';
// import Board from './components/Board/Board';

const store = configureStore();

const Main = () =>
  <Provider store={ store }>
    <ThreadsContainer />
  </Provider>
;

export default Main;
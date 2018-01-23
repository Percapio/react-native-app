import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PostsContainer from './containers/posts_container';

const store = configureStore();

const Main = () =>
  <Provider store={ store }>
    <PostsContainer/>
  </Provider>
;

export default Main;
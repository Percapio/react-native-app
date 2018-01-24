import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Navigator from './navigator/navigator';

const store = configureStore();

const Main = () =>
  <Provider store={ store }>
    <Navigator />
  </Provider>
;

export default Main;
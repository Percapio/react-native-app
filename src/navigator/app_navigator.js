import { StackNavigator } from 'react-navigation';

import Routes from './routes';

export const AppNavigator = StackNavigator(Routes, {
  navigationOptions: {
    title: ({ state }) => {
      if (state.params) {
        return `${state.params.title}`;
      }
    }
  }
});

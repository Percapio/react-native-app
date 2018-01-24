import { AppNavigator } from '../navigator/app_navigator';

export default function navReducer(state, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}
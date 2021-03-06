import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import { AppNavigator } from './app_navigator';

class Navigator extends Component {
  render() {
    return (
      <AppNavigator
        navigation= { addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

export default connect(
  state => ({
    nav: state.nav
  })
)(Navigator);
import React, { Component } from 'react';
import { 
  View, 
  Text,
} from 'react-native';

import styles from './thread.style';

export default class ThreadComponent extends Component {
  static navigationOptions = {
    title: 'Thread'
  }

  constructor(props) {
    super(props);

    this.state = {
      thread: '',
    };

    this.params = props.navigation.state.params.params;
  }

  componentDidMount() {
    this.props.getThread( this.params )
      .then( payload => this.setState({ thread: payload.thread }) );
  }

  render() {
    return(
      <View style={ styles.threadsComponent }>
        <Text style={ styles.threadsHeader }>Hi, from Thread</Text>
        <Text>{ this.state.thread.title }</Text>
        <Text>{ this.state.thread.handle }</Text>
        <Text>{ this.state.thread.quote }</Text>
      </View>
    );
  }
}
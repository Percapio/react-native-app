import React, { Component } from 'react';
import {
  View, 
  Text, 
  FlatList, 
  TouchableHighlight
} from 'react-native';

import styles from './forum.style';

export default class ForumComponent extends Component {
  static navigationOptions = {
    title: 'Forum'
  };

  constructor(props) {
    super(props);

    this.state = {
      threads: [],
    }

    this.params = props.navigation.state.params.params;
  }

  componentDidMount() {
    this.props.getAllThreads( this.params )
      .then( payload => this.setState({ threads: payload.threads }) );
  }

  _keyExtractor(item, index) {
    return index;
  }

  goToThread( link ) {
    const navigate = this.props.navigation.navigate;
    navigate('Thread', { title: 'Thread', params: link });
  }

  renderThreads({ item }) {
    return (
      <FlatList
        data={ item.threads }
        keyExtractor={ this._keyExtractor.bind(this) }
        renderItem={ this.renderThread.bind(this) }
      />
    );
  }

  renderThread({ item }) {
    return (
      <TouchableHighlight
        style={ styles.listItems }
        onPress={ () => this.goToThread( item.href ) }>
        <Text style={ styles.forumText }>{ item.title }</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={ styles.forumComponent }>
        <Text style={ styles.forumHeader }>Search Component goes here.</Text>
        <FlatList
          data={ this.state.threads }
          keyExtractor={ this._keyExtractor.bind(this) }
          renderItem={ this.renderThreads.bind(this) }/>
      </View>
    );
  }
}
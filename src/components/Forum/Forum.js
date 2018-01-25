import React, { Component } from 'react';
import {
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableHighlight
} from 'react-native';

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

  _goToForum() {}

  renderThreads({ item }) {
    return (
      <FlatList
        data={ item.threads }
        renderItem={ this.renderThread.bind(this) }
      />
    );
  }

  renderThread({ item }) {
    return (
      <TouchableHighlight style={ styles.listItems }>
        <Text style={ styles.forumText }>{ item.title }</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={ styles.forumComponent }>
        <Text style={ styles.forumHeader }>Forum Component.</Text>
        <FlatList
          data={ this.state.threads }
          keyExtractor={ this._keyExtractor }
          renderItem={ this.renderThreads.bind(this) }/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  forumComponent: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  forumHeader: {
    padding: 10
  },

  listItems: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },

  forumText: {
    color: '#0501ee'
  }
});
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

  constructor() {
    super();

  }

  componentDidMount() {

  }

  _keyExtractor(item, index) {
    return index;
  }

  _goToForum() {}

  _renderItem({item}) {
    return (
      <View style={styles.listItems}>
        <TouchableHighlight
          underlayColor={'#cac4c4'}
          onPress={this._goToForum(item.link)}>
          <Text style={styles.forumText}>{item.title} {item.count}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.forumComponent}>
        <Text style={styles.forumHeader}>Forum Component.</Text>
      </View>
    );
  }
}

        // <FlatList
        //   data={this.state.forums}
        //   keyExtractor={this._keyExtractor}
        //   renderItem={this._renderItem}/>

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